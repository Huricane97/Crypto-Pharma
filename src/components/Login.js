import React, { useState } from 'react';
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import ABI from '../abi.json'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const enableMetamask = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      setWalletAddress(address);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685'; // Replace with the actual contract address
        const contractABI = ABI; // Replace with the ABI of your contract

        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const accounts = await web3.eth.getAccounts();

        // Perform the login by calling the smart contract function
        const loginTx = await contract.methods.verifyUser(email, password).send({ from: accounts[0] });

        if (loginTx) {
          // Get the user's category ID from the smart contract
          console.log("login done")
          const categoryID = await contract.methods.getUserRole(walletAddress).call({ from: accounts[0] });
          localStorage.setItem('authenticated', 'true');

        
          // Redirect based on the user's category ID
          if (categoryID === '0') {
            navigate('/Pharmacy');
          } else if (categoryID === '1') {
            navigate('/Manufacturers');
          } else if (categoryID === '2') {
            navigate('/Warehouses');
          } else if (categoryID === '3') {
            navigate('/Drivers');
          } else {
            // Show error message on login page
            console.error('User category not found.');
            // Display an error message or handle the error accordingly
          }
        } else {
          // Show error message on login page
          console.error('Login failed.');
          // Display an error message or handle the error accordingly
        }
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container login">
        <h3 className="text-white">Login</h3>
        <form className="loginform" onSubmit={handleSubmit}>
          {/* Rest of the form elements */}
          <div className="form-group text-center user-reg">
            <label htmlFor="walletAddress">Attach Wallet</label>
            <button type="button" className="btn btn-warning" onClick={enableMetamask}>
              Attach Wallet
            </button>
            {walletAddress && <p className="text-white">Attached Wallet Address: {walletAddress}</p>}
          </div>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
          {/* Rest of the form elements */}
        </form>
        <a href="/Register">
          <button type="button" className="btn btn-outline-info mt-3">
            Don't Have an Account? Register
          </button>
        </a>
      </div>
    </div>
  );
}

export default Login;

