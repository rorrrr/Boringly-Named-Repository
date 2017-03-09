import React from 'react';

const PremPlayer = ({name, shirtNumber, value, country}) => {
  return (
    <div>
      <h3>{name} - {shirtNumber}</h3>
      <h4>{country}</h4>
      <p>Value: {value}</p>
      <p> --------------</p>
    </div>
  )
}

export default PremPlayer;