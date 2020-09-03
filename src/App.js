import React from 'react';
import './App.scss';
// import { Button } from '@material-ui/core';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';


import HomePage from './pages/homePage';
import LobbyPage from './pages/lobbyPage';
import EventPage from './pages/eventPage';
import CreateGamePage from './pages/createGamePage';
import JoinGamePage from './pages/joinGamePage';
import GamePage from './pages/gamePage';

import Navbar from './parts/navBarPart/navBarPart'



function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <div>
          testing counter state 
          <h2>{counter}</h2>
          <button onClick={(() => dispatch({type:"INCREMENT"}))}>Plus 1</button>
          <button onClick={(() => dispatch({type:"DECREMENT"}))}>Deduct 1</button>
        </div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/lobby" component={LobbyPage} />
          <Route path="/eventpage" component={EventPage} />
          <Route path="/creategame" component={CreateGamePage} />
          <Route path="/joingame" component={JoinGamePage} />
          <Route path="/game" component={GamePage} />

        </Switch>
      </main>
    </BrowserRouter>
    // <div className="App">
    //   <Button variant="outlined" color="secondary"> This is our first button</Button>
    // </div>
  );
}

export default App;
