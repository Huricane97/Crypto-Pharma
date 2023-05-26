import React, { useState, useEffect } from 'react';
import QrScanner from './QrScanner';
import OrderTrackingPage from './OrderTracking';
import User from '../images/user.png';
import 'font-awesome/css/font-awesome.min.css';
import './OrderTabs.css';
import Web3 from 'web3';
import ABI from '../abi.json';

function DriverComponent() {
  const [orders, setOrders] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [driverName, setDriverName] = useState('');
  const [driverRating, setDriverRating] = useState('');
  const [driverAddress, setDriverAddress] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const enableMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        setWalletAddress(address);
      } catch (error) {
        console.error('Error enabling MetaMask:', error);
        // Handle the error appropriately (e.g., show an error message)
      }
    } else {
      console.error('MetaMask not detected');
      // Handle the case where MetaMask is not available (e.g., show an error message)
    }
  };

  const fetchOrders = async (driverAddress) => {
    try {
      const web3 = new Web3(window.ethereum);
      const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address
      const contract = new web3.eth.Contract(ABI, contractAddress);

      // Check if the provided address is a registered driver
      const isDriver = await contract.methods.drivers(driverAddress).call();
      if (!isDriver) {
        console.error('Invalid driver address');
        // Handle the case where the address is not a registered driver (e.g., show an error message)
        return;
      }

      const fetchedOrders = await contract.methods.getDriverOrders(driverAddress).call();

      console.log(fetchedOrders); // Corrected variable name

      setOrders(fetchedOrders);
      console.log('All orders fetched');
    } catch (error) {
      console.error('Error fetching orders:', error);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  useEffect(() => {
    const enableMetamaskAndFetchOrders = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.enable();
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          const address = accounts[0];
          setWalletAddress(address);
          console.log(address);
          // Fetch orders for the driver
          await fetchOrders(address);
        } catch (error) {
          console.error('Error enabling MetaMask and fetching orders:', error);
          // Handle the error appropriately (e.g., show an error message)
        }
      } else {
        console.error('MetaMask not detected');
        // Handle the case where MetaMask is not available (e.g., show an error message)
      }
    };

    const fetchData = async () => {
      try {
        const web3 = new Web3(window.ethereum);
        const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address
        const contract = new web3.eth.Contract(ABI, contractAddress);

        // Get all driver addresses
        const driverAddresses = await contract.methods.getAllDriverAddresses().call();

        // Fetch driver information for each address
        const driverData = await Promise.all(
          driverAddresses.map((address) => contract.methods.drivers(address).call())
        );

        // Process driver data and update state
        const processedDrivers = processDriverData(driverAddresses, driverData);
        setDrivers(processedDrivers);

        // Enable MetaMask and fetch orders for the driver
        await enableMetamaskAndFetchOrders();
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const processDriverData = (driverAddresses, driverData) => {
    // Process the raw driver data and return an array of drivers with names and ratings
    // Assuming driverAddresses and driverData arrays have the same length and correspond to each other

    const processedDrivers = driverAddresses.map((address, index) => ({
      address,
      name: driverData[index].name,
      rating: driverData[index].rating,
    }));

    return processedDrivers;
  };

  const registerDriver = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address

      const contract = new web3.eth.Contract(ABI, contractAddress);
      const accounts = await web3.eth.getAccounts();

      await contract.methods.registerDriver(driverName, driverRating).send({ from: accounts[0] });

      // Fetch updated driver data
      const updatedDriverData = await contract.methods.drivers(accounts[0]).call();

      // Update the driver data in the state
      setDrivers([...drivers, { address: accounts[0], name: updatedDriverData.name, rating: updatedDriverData.rating }]);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const rateDriver = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address

      const contract = new web3.eth.Contract(ABI, contractAddress);
      const accounts = await web3.eth.getAccounts();

      await contract.methods.rateDriver(driverAddress, parseInt(driverName), parseInt(driverRating)).send({ from: accounts[0] });

      // Fetch updated driver data
      const updatedDriverData = await contract.methods.getDriverData(driverAddress).call();

      // Find the driver in the state array and update the rating
      const updatedDrivers = drivers.map((driver) => {
        if (driver.address === driverAddress) {
          return {
            ...driver,
            rating: updatedDriverData.rating,
          };
        }
        return driver;
      });

      setDrivers(updatedDrivers);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };


    return (
        <div>
            <div className="tr-job-posted section-padding">
                <div className="container">
                    <div className="job-tab text-center">
                        <ul className="nav nav-tabs justify-content-center" role="tablist">
                            <li role="presentation" className="active">
                                <a className="active show" href="#hot-jobs" aria-controls="hot-jobs" role="tab" data-toggle="tab" aria-selected="true">Ratings</a>
                            </li>
                            <li role="presentation"><a href="#recent-jobs" aria-controls="recent-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Verify QR Code</a></li>
                            <li role="presentation"><a href="#popular-jobs" aria-controls="popular-jobs" role="tab" data-toggle="tab" className="" aria-selected="false" onClick={fetchOrders}>Orders</a></li>
                            <li role="presentation"><a href="#order-track" aria-controls="popular-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Track Your Order</a></li>
                        </ul>
                        <div className="tab-content text-left">
                            <div role="tabpanel" className="tab-pane fade active show" id="hot-jobs">
                                <div className="row">
                                    <div className="card-group" style={{ gap: '30px' }}>
                                        {drivers.map((driver, index) => (
                                            <div className="card" key={index}>
                                                <img className="card-img-top" src={User} alt="Card" />
                                                <div className="card-body">
                                                    <h3>{driver.name}</h3>
                                                    <h6>Driver Address: {driver.address}</h6>
                                                    <div> Driver's Ratings:
                                                        {Array.from({ length: 5 }, (_, i) => (
                                                            <span
                                                                key={i}
                                                                className={`fa fa-star${i < driver.rating ? ' checked' : ''}`}
                                                                onClick={() => rateDriver(driver.address, i + 1)}
                                                            ></span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="col p-3">
                                            <h2 className='text-white'>Rate Driver</h2>
                                            <div className="form-group">
                                                <label>Driver Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={driverAddress}
                                                    onChange={(e) => setDriverAddress(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Driver Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={driverName}
                                                    onChange={(e) => setDriverName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Driver Rating</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={driverRating}
                                                    onChange={(e) => setDriverRating(e.target.value)}
                                                />
                                            </div>
                                            <button className="btn btn-primary" onClick={rateDriver}>
                                                Submit Rating
                                            </button>
                                        </div>

                                        {/* <div className="col p-3">
                                            <h2 className='text-white'>Register as Driver</h2>
                                            <div className="form-group">
                                                <label>Driver Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={driverName}
                                                    onChange={(e) => setDriverName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Driver Rating</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={driverRating}
                                                    onChange={(e) => setDriverRating(e.target.value)}
                                                />
                                            </div>
                                            <button className="btn btn-primary" onClick={registerDriver}>
                                                Register as Driver
                                            </button>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="recent-jobs">
                                <QrScanner />
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="popular-jobs">
                                <div className="row">
                                    <table className="table text-white">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Medical ID</th>
                                                <th scope="col">Product ID</th>
                                                <th scope="col">Accepted</th>
                                                <th scope="col">Tracking Number</th>
                                                <th scope="col">Temperature</th>
                                                <th scope="col">Last Updated</th>
                                                <th scope="col">Driver Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.length === 0 ? (
                                                <tr>
                                                    <td colSpan="10">No orders for this driver</td>
                                                </tr>
                                            ) : (
                                                orders.map((order, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{order.orderId}</th>
                                                        <td>{order.email}</td>
                                                        <td>{order.name}</td>
                                                        <td>{order.medicalId}</td>
                                                        <td>{order.productId}</td>
                                                        <td>{order.accepted ? 'Yes' : 'No'}</td>
                                                        <td>{order.trackingNumber}</td>
                                                        <td>{order.temperature}</td>
                                                        <td>{order.lastUpdated}</td>
                                                        <td>{order.driverAddress}</td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div role="tabpanel" className="tab-pane fade" id="order-track">
                                <OrderTrackingPage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}

export default DriverComponent;



//     return (
//         <div>
//             <div className="tr-job-posted section-padding">
//                 <div className="container">
//                     <div className="job-tab text-center">
//                         <ul className="nav nav-tabs justify-content-center" role="tablist">
//                             <li role="presentation" className="active">
//                                 <a className="active show" href="#hot-jobs" aria-controls="hot-jobs" role="tab" data-toggle="tab" aria-selected="true">Ratings</a>
//                             </li>
//                             <li role="presentation"><a href="#recent-jobs" aria-controls="recent-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Verify QR Code</a></li>
//                             <li role="presentation"><a href="#popular-jobs" aria-controls="popular-jobs" role="tab" data-toggle="tab" className="" aria-selected="false" onClick={fetchOrders}>Orders</a></li>
//                             <li role="presentation"><a href="#order-track" aria-controls="popular-jobs" role="tab" data-toggle="tab" className="" aria-selected="false">Track Your Order</a></li>
//                         </ul>
//                         <div className="tab-content text-left">
//                             <div role="tabpanel" className="tab-pane fade active show" id="hot-jobs">
//                                 <div className="row">

//                                     <div class="card-group" style={{ gap: '30px' }}>
//                                         {drivers.map((driver, index) => (
//                                             <div class="card" key={index}>
//                                                 <img class="card-img-top" src={User} alt="Card image cap" />
//                                                 <div class="card-body">
//                                                     <h3>{driver.name}</h3>
//                                                     <h6>Contact Info</h6>
//                                                     <div>
//                                                         {Array.from({ length: 5 }, (_, i) => (
//                                                             <span
//                                                                 class={`fa fa-star${i < driver.rating ? ' checked' : ''}`}
//                                                                 key={i}
//                                                             ></span>
//                                                         ))}
//                                                     </div>
//                                                     <p class="card-text">
//                                                         Some quick example text to build on the card title and make up the bulk of the card's content.
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>




//                                 </div>
//                             </div>
//                             <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
//                                 <div className="row">
//                                     <div>
//                                         <QrScanner />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div role="tabpanel" className="tab-pane fade in" id="popular-jobs">
//                                 <div className="row">
//                                     <table class="table text-white">
//                                         <thead>
//                                             <tr>
//                                                 <th scope="col">Order Number</th>
//                                                 <th scope="col">Name</th>
//                                                 <th scope="col">Email</th>
//                                                 <th scope="col">Medical ID</th>
//                                                 <th scope="col">Address</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {orders.map((order, index) => (
//                                                 <tr key={index}>
//                                                     <th scope="row">{index + 1}</th>
//                                                     <td>{order.name}</td>
//                                                     <td>{order.email}</td>
//                                                     <td>{order.medicalId}</td>
//                                                     <td>{order.trackingNumber}</td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                             <div role="tabpanel" className="tab-pane fade in" id="order-track">
//                                 <div className="row">
//                                     <h1 className='text-white'>Order Tracking</h1>
//                                     <OrderTrackingPage />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default DriverComponent