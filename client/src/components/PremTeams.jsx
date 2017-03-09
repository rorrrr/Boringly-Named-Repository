import React from 'react'
import PremTeamsList from './PremTeamsList'

class PremTeams extends React.Component {

  constructor() {
    super();
    this.state = {premteams: []}
  }

  componentDidMount() {
    let url = 'http://api.football-data.org/v1/competitions/398/teams'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader("X-Auth-Token", "4a909554d864425394385d499d38572a");

    request.onload = () => {
      const responseData = JSON.parse(request.responseText);
      const premTeamsList = responseData.teams;
      this.setState({premteams: premTeamsList});
    }

    request.send();
  }


  render(){
    return(
      <PremTeamsList premteams={this.state.premteams} /> 
      )
  }
}

export default PremTeams;
