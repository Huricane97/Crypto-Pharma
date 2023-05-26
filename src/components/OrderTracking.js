import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const OrderTrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [driverLocation, setDriverLocation] = useState(null);
  const [isValidCode, setIsValidCode] = useState(true);

  const handleOrderNumberChange = (event) => {
    setOrderNumber(event.target.value);
    setIsValidCode(true);
  };

  const handleTrackOrder = () => {
    // Simulate fetching driver location based on order number
    const dummyDriverLocation = getDriverLocationByOrderNumber(orderNumber);
    if (dummyDriverLocation) {
      setDriverLocation(dummyDriverLocation);
      setIsValidCode(true);
    } else {
      setDriverLocation(null);
      setIsValidCode(false);
    }
  };

  const getDriverLocationByOrderNumber = (orderNumber) => {
    // Implement your logic to fetch driver location based on order number
    // Return driver location as an object { lat, lng } or null if not found
    // Replace this logic with actual data from your blockchain or server
    if (orderNumber === '12345') {
      return {
        lat: 30.609933638216305, 
        lng: 35.82087247110465, 
      };
    }
    return null;
  };

  return (
    <div>
      <div>
        <input type="text" value={orderNumber} onChange={handleOrderNumberChange} placeholder="Enter Order Number" />
        <button onClick={handleTrackOrder}>Track Order</button>
        {!isValidCode && <p className='text-danger'>Tracking code not valid</p>}
      </div>
      {driverLocation && (
        <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBbN9FPPKu55AiFO39blVZnSmmPxteklH4' }} // Replace with your Google Maps API key
            defaultCenter={{ lat: 30.609933638216305, lng: 35.82087247110465 }}
            defaultZoom={16}
          >
            <Marker lat={driverLocation.lat} lng={driverLocation.lng} text="Driver Location" />
          </GoogleMapReact>
        </div>
      )}
    </div>
  );
};

const Marker = ({ text }) => (
  <div style={{ position: 'relative', transform: 'translate(-50%, -50%)' }}>
    <div
      style={{
        backgroundColor: 'red',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        padding: '20px',
      }}
    >
      {text}
    </div>
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        border: '4px solid black',
        borderRadius: '50%',
        width: '12px',
        height: '12px',
      }}
    />
  </div>
);

export default OrderTrackingPage;