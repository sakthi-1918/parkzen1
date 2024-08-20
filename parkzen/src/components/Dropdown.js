import React, { useState } from 'react';

const LocationDropdown = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <h2>Select a Location</h2>
      <select value={selectedLocation} onChange={handleChange}>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
      <p>Selected Location: {selectedLocation}</p>
    </div>
  );
};

export default LocationDropdown;







