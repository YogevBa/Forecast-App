import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import Favorites from './screens/Favorites/Favorites'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Route
        exact
        path="/yogev-betito-14-8-2020"
        render={() => (
          <Home />
        )}
      />
      <Route
        exact
        path="/favorites"
        render={() => (
          <Favorites />
        )}
      />
    </div>
  );
}

export default App;
