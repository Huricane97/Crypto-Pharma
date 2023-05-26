import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import './OrderTabs.css';
import Web3 from 'web3';
import ABI from '../abi.json';

function GenerateQr({ contract }) {
    const [gtin, setGtin] = useState('');
    const [exp, setExp] = useState('');
    const [id, setId] = useState('');
    const [lot, setLot] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [qrData, setQrData] = useState(null);
    const [walletAddress, setWalletAddress] = useState('');
    const [userRole, setUserRole] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'gtin') setGtin(value);
        else if (name === 'exp') setExp(value);
        else if (name === 'id') setId(value);
        else if (name === 'lot') setLot(value);
        else if (name === 'serialNumber') setSerialNumber(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const userAddress = accounts[0];
            setWalletAddress(userAddress);

            const role = await contract.methods.getUserRole(userAddress).call();

            if (role !== '1') {
                setError('You are not a manufacturer. Cannot generate QR code.');
            } else {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();

                const expiryDate = new web3.utils.BN(Math.floor(new Date(exp) / 1000));
                const gasEstimate = await contract.methods.generateQRCode(gtin, expiryDate, id, lot, serialNumber).estimateGas({ from: accounts[0] });
                const codeHashTx = await contract.methods.generateQRCode(gtin, expiryDate, id, lot, serialNumber).send({ from: accounts[0], gas: gasEstimate });
                const codeHash = codeHashTx.events.QRCodeGenerated.returnValues.codeHash;

                const qrData = {
                    GTIN: gtin,
                    Exp: exp,
                    ID: id,
                    Lot: lot,
                    SerialNumber: serialNumber,
                    CodeHash: codeHash,
                };
                setQrData(qrData);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const downloadQRCode = () => {
        if (qrData) {
            const canvas = document.getElementById('qrcode');
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'qrcode.png';
            link.click();
        }
    };


    return (
        <div className="generate-qr-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gtin">GTIN:</label>
                    <input type="text" name="gtin" value={gtin} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="exp">Expiry Date:</label>
                    <input type="date" name="exp" value={exp} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input type="text" name="id" value={id} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lot">Lot:</label>
                    <input type="text" name="lot" value={lot} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="serialNumber">Serial Number:</label>
                    <input type="text" name="serialNumber" value={serialNumber} onChange={handleInputChange} required />
                </div>
                {error && <div className="error text-white">{error}</div>}
                <button type="submit" className="btn btn-primary">
                    Generate QR Code
                </button>
            </form>
            {qrData && (
                <div className="qr-code">
                    <QRCode value={qrData.CodeHash} size={200} id="qrcode" />
                    <h3 className="text-white">Code hash: {qrData.CodeHash}</h3>
                    <button onClick={downloadQRCode} className="btn btn-primary">
                        Download QR Code
                    </button>
                </div>
            )}
        </div>
    );
}

export default GenerateQr;
