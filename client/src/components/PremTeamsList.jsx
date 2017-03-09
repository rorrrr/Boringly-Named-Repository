import React from 'react';
import PremTeam from './PremTeam';

const PremTeamsList = ({premteams}) => {
  const teamNodes = premteams.map((team, index) => {
    return (
      <PremTeam
        key={index}
        name={team.name}
        badge={team.crestUrl}
      />
    )
  });

  return (
    <div id="teamblocks">
      {teamNodes}
    </div>
  );
}

export default PremTeamsList;