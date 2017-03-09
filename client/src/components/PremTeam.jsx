import React from 'react';

const PremTeam = ({name, badge}) => {
  return (
    <div>
      <p>{name}</p>
      <img id='badge' src={badge}/>
    </div>
  )
}

export default PremTeam;