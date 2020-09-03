import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" > Home </Link>
      <Link to="/lobby" > Lobby </Link>
      <Link to="/eventpage" > Event </Link>
      <Link to="/creategame" > Create Game </Link>
      <Link to="/joingame" > Join Game </Link>
      <Link to="/game" > Game </Link>
    </nav>
  )
}

export default NavBar;
