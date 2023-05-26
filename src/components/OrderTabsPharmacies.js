import React, { Component, useState, useEffect } from 'react'
import './OrderTabs.css'
import QrScanner from './QrScanner'
import OrderTrackingPage from './OrderTracking'
import Web3 from 'web3';
import ABI from '../abi.json'
import TemperatureUpdate from './TemperatureUpdate';

function OrderTabs() {
    const [walletAddress, setWalletAddress] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [orders, setOrders] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [driverAddress, setDriverAddress] = useState('');


    const enableMetamask = async () => {
        if (window.ethereum) {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            const address = accounts[0];
            setWalletAddress(address);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSuccess(false);
        setIsError(false);

        // Perform the login by calling the smart contract function
        const email = event.target.elements.inputEmail4.value;
        const name = event.target.elements.input4.value;
        const medicalId = event.target.elements.medicalid.value;
        const productId = event.target.elements.orderproduct.value;


        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address
                const contractABI = ABI; // Replace with the ABI of your contract

                const contract = new web3.eth.Contract(contractABI, contractAddress);

                const accounts = await web3.eth.getAccounts();
                setDriverAddress('0xeec9D4993Be411B6A0dcFF1e8759Ab4DEab5dD76');
                const role = await contract.methods.getUserRole(walletAddress).call({ from: accounts[0] });
                const result = await contract.methods.placeOrder(email, name, medicalId, productId,driverAddress).send({ from: accounts[0] });

                console.log('Order placed:', result);
                setIsSuccess(true);
            }
        } catch (error) {
            console.error('Error placing order:', error);
            // Show error message
            setIsError(true);
        }
    }
    const fetchOrders = async () => {
        try {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address

            const contract = new web3.eth.Contract(ABI, contractAddress);
            const fetchedOrders = [];

            const orderCount = await contract.methods.orderCount().call();

            // Iterate over the order IDs and fetch each order
            for (let i = 0; i < orderCount; i++) {
                const order = await contract.methods.orders(3, i).call();
                fetchedOrders.push(order);
            }

            setOrders(fetchedOrders);
            console.log('all orders fetched')
        } catch (error) {
            console.error('Error fetching orders:', error);
            // Handle the error appropriately (e.g., show an error message)
        }
    };

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address
                const contractABI = ABI; // Replace with the ABI of your contract

                const contract = new web3.eth.Contract(contractABI, contractAddress);

                const driverAddresses = await contract.methods.getAllDriverAddresses().call();

                const fetchedDrivers = [];

                for (const driverAddress of driverAddresses) {
                    const driver = await contract.methods.drivers(driverAddress).call();
                    fetchedDrivers.push(driver);
                }

                // Update the drivers state variable with the fetched data
                setDrivers(fetchedDrivers);
            } catch (error) {
                console.error('Error fetching drivers:', error);
            }
        };

        fetchDrivers();
    }, []); // Added an empty dependency array to run the effect only once during component mount

    return (
        <div>
            <div className="tr-job-posted section-padding">
                <div className="container">
                    <div className="job-tab text-center">
                        <ul className="nav nav-tabs justify-content-center" role="tablist">
                            <li role="presentation" className="active">
                                <a className="active show" href="#hot-jobs" aria-controls="hot-jobs" role="tab" data-toggle="tab" aria-selected="true">Place Order</a>
                            </li>
                            <li role="presentation"><a href="#recent-jobs" aria-controls="recent-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Verify QR Code</a></li>

                            <li role="presentation">
                                <a href="#popular-jobs" aria-controls="popular-jobs" role="tab" data-toggle="tab" className="" aria-selected="false" onClick={fetchOrders}>
                                    Orders
                                </a>
                            </li>

                            <li role="presentation"><a href="#order-track" aria-controls="popular-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Track Your Order</a></li>
                            <li role="presentation"><a href="#temperature" aria-controls="temperature" role="tab" data-toggle="tab" className="" aria-selected="false">Check Temperature</a></li>
                        </ul>
                        <div className="tab-content text-left">
                            <div role="tabpanel" className="tab-pane fade active show" id="hot-jobs">
                                <div className="row">
                                    <form className='gapform' onSubmit={handleSubmit}>
                                        <div className="form-row firstgroup">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="input4">Name</label>
                                                <input type="text" className="form-control" id="input4" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="form-row firstgroup">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="medicalid">Medical ID</label>
                                                <input type="text" className="form-control" id="medicalid" placeholder="Medical ID" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="orderproduct">Product to Order (ID)</label>
                                                <input type="text" className="form-control" id="orderproduct" placeholder="Product to Order" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="inputAddress">Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="chooseDriver">Choose Driver</label>
                                            <select id="chooseDriver" className="form-control">
                                                {drivers.map((driver, index) => (
                                                    <option key={index} value={driver.address}>
                                                        {`${index + 1} - ${driver.name}, rating: ${driver.rating}`}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-row firstgroup">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputCity">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputZip">Zip</label>
                                                <input type="text" className="form-control" id="inputZip" />
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <div className="form-check checkcls">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    I consent to having this website store my submitted information so they can respond to my inquiry.
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-warning w-25 buttton" onClick={enableMetamask}>Place Order</button>
                                    </form>
                                    {/* Success message */}
                                    {isSuccess && (
                                        <div className="alert alert-success" role="alert">
                                            Order placed successfully!
                                        </div>
                                    )}

                                    {/* Error message */}
                                    {isError && (
                                        <div className="alert alert-danger" role="alert">
                                            Error placing the order. Please try again.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
                                <div className="row">
                                    <div>
                                        <QrScanner />
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade in" id="popular-jobs">
                                <div className="row">
                                    <table className="table text-white">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Number</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Medical ID</th>
                                                <th scope="col">Tracking Number</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{order.name}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.medicalId}</td>
                                                    <td>{order.trackingNumber}</td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade in" id="order-track">
                                <div className="row">
                                    <h1 className='text-white'>Order Tracking</h1>
                                    <OrderTrackingPage />
                                </div>
                            </div>

                            <div role="tabpanel" className="tab-pane fade in" id="temperature">
                                <div className="row">
                                    <TemperatureUpdate/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default OrderTabs