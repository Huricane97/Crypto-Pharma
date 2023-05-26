import React, { useState } from 'react';
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import ABI from '../abi.json'
import '../App.css'

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const registerUser = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address
        const contractABI = ABI; // Replace with the ABI of your contract

        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const accounts = await web3.eth.getAccounts();

        const registerTx = await contract.methods.registerUser(email, password, category).send({ from: accounts[0] });

        // Update the user's wallet address in the state
        setWalletAddress(accounts[0]);

        // Navigate to the login page after successful registration
        navigate('/Login');
      }
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }
  };

  const enableMetamask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        setWalletAddress(address);
      }
    } catch (error) {
      console.error('Error occurred while enabling Metamask:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div  className="container login">
        <h3 className='text-white'>Registration</h3>
        <form className="loginform">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              <option value="0">Pharmacist</option>
              <option value="1">Manufacturer</option>
              <option value="2">Warehouse</option>
              <option value="3">Driver</option>
            </select>
          </div>
          <div className='user-reg text-center'>
          <button type="button" className="btn btn-warning" onClick={enableMetamask}>
            Attach Wallet
          </button>
          {walletAddress && (
            <p className="text-white">Attached Wallet Address: {walletAddress}</p>
          )}
          <button type="button" className="btn btn-warning" onClick={registerUser}>
            Register
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
