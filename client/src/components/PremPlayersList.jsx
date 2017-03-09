import React from 'react';
import PremPlayer from './PremPlayer';

const PremPlayersList = ({premplayers}) => {
  const playerNodes = premplayers.map((player, index) => {
    return (
      <PremPlayer
        key={index}
        name={player.name}
        shirtNumber={player.jerseyNumber}
        country={player.nationality}
        value={player.marketValue}
      />
    )
  });

  return (
    <div id='players'>
      {playerNodes}
    </div>
  );
}

export default PremPlayersList;