import React from 'react'
import PremPlayersList from './PremPlayersList'

class PremPlayers extends React.Component {

  constructor() {
    super();
    this.state = {premplayers: []}
  }

  componentDidMount() {
    let url = 'http://api.football-data.org/v1/teams/64/players'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader("X-Auth-Token", "4a909554d864425394385d499d38572a");

    request.onload = () => {
      const responseData = JSON.parse(request.responseText);
      const premplayersList = responseData.players;
      this.setState({premplayers: premplayersList});
    }

    request.send();
  }


  render(){
    return(
      <PremPlayersList premplayers={this.state.premplayers} /> 
      )
  }
}

export default PremPlayers;
