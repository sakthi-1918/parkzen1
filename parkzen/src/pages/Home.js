import React from 'react';
import Navibar from '../components/Navigationbar';
import backgroundImage from '../assets/parkingLot.jpeg'; // Import the image

function Home() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Cover the entire div
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    overflow: 'hidden', // Optional: to prevent scrolling bars
    
  };

  return (
    <div style={divStyle}>
      <Navibar />
      {/* Add any additional content here */}
    </div>
  );
}

export default Home;
