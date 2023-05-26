import React, { useState, useEffect } from 'react';
import QrReader from 'modern-react-qr-reader';
import Web3 from 'web3';
import ABI from '../abi.json';

function QrCodeVerification() {
  const [qrCodeData, setQrCodeData] = useState('');
  const [verificationResult, setVerificationResult] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const verifyCode = async (data) => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const contractAddress = '0xdCb4FEBDF1eb1EEC70e154E5D2A981B13a056eAc'; // Replace with the actual contract address
      const contractABI = ABI; // Replace with the ABI of your contract

      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const result = await contract.methods.validateQRCode(data).call();

      return result;
    } catch (error) {
      console.error('Error validating QR code:', error);
      return false;
    }
  };

  useEffect(() => {
    if (qrCodeData) {
      const verifyQrCode = async () => {
        const result = await verifyCode(qrCodeData);
        if (result) {
          setVerificationResult('Valid QR code!');
        } else {
          setVerificationResult('Invalid QR code!');
        }
      };
      verifyQrCode();
    }
  }, [qrCodeData]);

  const handleScan = (data) => {
    if (data) {
      setQrCodeData(data);
      setIsScanning(false); // Stop scanning after a QR code is detected
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const startScan = () => {
    setIsScanning(true); // Start scanning
    setQrCodeData(''); // Reset scanned QR code data
    setVerificationResult(''); // Reset verification result
  };

  const stopScan = () => {
    setIsScanning(false); // Stop scanning
  };

  return (
    <div>
      {!isScanning && (
        <button className="btn btn-warning" onClick={startScan}>
          Scan Code
        </button>
      )}
      {isScanning && (
        <div>
          <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
          <button className="btn btn-warning" onClick={stopScan}>
            Stop Scan
          </button>
        </div>
      )}
      {qrCodeData && <p className="text-white">Scanned QR code data: {qrCodeData}</p>}
      <h1 className="text-danger">{verificationResult}</h1>
    </div>
  );
}

export default QrCodeVerification;
