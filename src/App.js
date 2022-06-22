import React, {useState} from 'react';
import Donate from './components/Donate'
import Reservations from './components/Reservations'
import GameLibrary from './components/GameLibrary';
import NavBar from './components/NavBar';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
            <Route exact path="/">
                  <Home />
            </Route>
            <Route path="/boardgames">
                  <GameLibrary />
            </Route>

            <Route path="/reservations">
                  <Reservations />
            </Route>

            <Route path="/donate">
                  <Donate />
            </Route>

      </Switch>
      
    </div>
  );
}

export default App;
