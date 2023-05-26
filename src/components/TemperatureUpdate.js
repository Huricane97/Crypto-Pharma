import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import ABI from '../abi.json';

export default function TemperatureUpdate() {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (window.ethereum) {
          // Connect to the local Ethereum provider
          const web3 = new Web3(window.ethereum);

          // Contract address and ABI
          const contractAddress = '0x880e0CE3b997a3e6808bd78de4D608C5ee0AD685';

          // Create a new contract instance
          const contract = new web3.eth.Contract(ABI, contractAddress);

          // Fetch initial temperature data for orderId 1 from the contract
          try {
            const result = await contract.methods.getTemperature(1).call();
            const temperature = result[0];
            const timestamp = result[1];
            const date = new Date(timestamp * 1000); // Convert to milliseconds
            const formattedTimestamp = date.toLocaleString(); // Convert to local date and time string
            const tempData = [{ orderId: 1, temperature, timestamp: formattedTimestamp, interval: 1 }];
            setTemperatureData(tempData);
          } catch (error) {
            console.error('Error fetching initial temperature for order 1:', error);
            setTemperatureData([{ orderId: 1, temperature: 'N/A', timestamp: 'N/A', interval: 1 }]);
          }

          // Set up interval to fetch temperature every 1 minute
          let intervalCount = 2;
          const interval = setInterval(async () => {
            try {
              const result = await contract.methods.getTemperature(1).call();
              const temperature = result[0];
              const timestamp = result[1];
              const date = new Date(timestamp * 1000); // Convert to milliseconds
              const formattedTimestamp = date.toLocaleString(); // Convert to local date and time string
              setTemperatureData(prevData => [
                ...prevData,
                { orderId: 1, temperature, timestamp: formattedTimestamp, interval: intervalCount }
              ]);
            } catch (error) {
              console.error(`Error fetching temperature for order 1:`, error);
              setTemperatureData(prevData => [
                ...prevData,
                { orderId: 1, temperature: 'N/A', timestamp: 'N/A', interval: intervalCount }
              ]);
            }
            intervalCount++;

            // Stop interval after 30 intervals
            if (intervalCount > 30) {
              clearInterval(interval);
            }
          }, 60000);

          // Clean up interval on component unmount
          return () => {
            clearInterval(interval);
          };
        }
      } catch (error) {
        console.error('Error occurred while fetching temperature data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      <h2>Temperature Data</h2>
      <table className="table text-white">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Temperature</th>
            <th>Time</th>
            <th>Interval</th>
          </tr>
        </thead>
        <tbody>
          {temperatureData.map((data, index) => (
            <tr key={index}>
              <td>{data.orderId}</td>
              <td>{data.temperature}</td>
              <td>{data.timestamp}</td>
              <td>{data.interval}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
