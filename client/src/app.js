import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import Home from './components/Home'
import PremPlayers from './components/PremPlayers';
import PremTeams from './components/PremTeams';
import DogePhone from './components/DogeContact';
// import PremTeamSelector from './components/PremTeamSelector'
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  render(

   <Router history={hashHistory}>

     <Route  path='/' component={Main} >

       <IndexRoute component={Home} />
       <Route path='home' component={Home} />
       <Route path='premteams' component={PremTeams} />
       <Route path='premplayers' component={PremPlayers} />
       <Route path='dogecontact' component={DogePhone} />

     </Route>

   </Router>,

    document.getElementById('app')
  )

}
