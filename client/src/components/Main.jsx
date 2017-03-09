import React from 'react'
import { Link } from 'react-router'


const Main = ({children}) => (

  <div id="main">
    <h4> LOL RYAN BABEL REFERENCES IN 2017</h4>
    <ul id="bullets">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/premteams'>PremTeams</Link></li>
      <li><Link to='/premplayers'>Liverpool Players</Link></li>
      <li><Link to='/dogecontact'>DogePhone</Link></li>
     
    </ul>
    {children}
  </div>


)

export default Main