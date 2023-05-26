import React, { Component,useState, useEffect } from 'react'
import './OrderTabs.css'
import QrScanner from './QrScanner';
import OrderTrackingPage from './OrderTracking';
import GenerateQr from './GenerateQr';
import Web3 from 'web3';
import ABI from '../abi.json'
import TemperatureUpdate from './TemperatureUpdate';


function OrderTabsManufacturer() {    
    const [walletAddress, setWalletAddress] = useState('');
    const [orders, setOrders] = useState([]);
    const [contract, setContract] = useState('');
    useEffect(() => {
        fetchOrders();
      }, []);
    
    
    const fetchOrders = async () => {
        try {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address

            const contract = new web3.eth.Contract(ABI, contractAddress);
            setContract(contract);
            const fetchedOrders = [];

            const orderCount = await contract.methods.orderCount().call();

            // Iterate over the order IDs and fetch each order
            for (let i = 0; i < orderCount; i++) {
                const order = await contract.methods.orders(0,i).call();
                fetchedOrders.push(order);
            }

            setOrders(fetchedOrders);
            console.log('all orders fetched')
        } catch (error) {
            console.error('Error fetching orders:', error);
            // Handle the error appropriately (e.g., show an error message)
        }
    };

    return (
        <div>
            <div className="tr-job-posted section-padding">
                <div className="container">
                    <div className="job-tab text-center">
                        <ul className="nav nav-tabs justify-content-center" role="tablist">
                            <li role="presentation" className="active">
                                {/* <a className="active show" href="#hot-jobs" aria-controls="hot-jobs" role="tab" data-toggle="tab" aria-selected="true">Place Order</a> */}
                                <a href="#popular-jobs" aria-controls="popular-jobs" role="tab" data-toggle="tab" className="active show" aria-selected="true" onLoad={fetchOrders}>Orders</a>
                            </li>
                            <li role="presentation"><a href="#generate-qr" aria-controls="generate-qr" role="tab" data-toggle="tab" className="" aria-selected="false">Generate QR Code</a></li>
                            <li role="presentation"><a href="#recent-jobs" aria-controls="recent-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Verify QR Code</a></li>
                            <li role="presentation"><a href="#order-track" aria-controls="order-track" role="tab" data-toggle="tab" className="" aria-selected="false">Track Your Order</a></li>
                            <li role="presentation"><a href="#temperature" aria-controls="temperature" role="tab" data-toggle="tab" className="" aria-selected="false">Check Temperature</a></li>

                        </ul>
                        <div className="tab-content text-left">
                        <div role="tabpanel" className="tab-pane fade in active show" id="popular-jobs">
                                <div className="row">
                                    <table class="table text-white">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Number</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Medical ID</th>
                                                <th scope="col">Address</th>
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
                            <div role="tabpanel" className="tab-pane fade " id="generate-qr">
                                <div className="row">
                                    <GenerateQr contract={contract}/>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
                                <div className="row">
                                    <div>
                                        <QrScanner />
                                    </div>
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
export default  OrderTabsManufacturer