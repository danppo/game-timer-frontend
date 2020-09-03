import React from 'react';
import ActionButton from '../components/button/ActionButton';

const HomePage = () => {

  return (
    <>
      <h2>
        Home
      </h2>
      <ActionButton 
        label="Start Event"
        payload="eventpage"
        action="nav"
        variant="contained"
        fullwidth="true"
      />

      <ActionButton 
        label="Join Game" 
        payload="joingame"
        action="nav"
        color="secondary"
        fullwidth="true"
      />
    </>

  )
}

export default HomePage;