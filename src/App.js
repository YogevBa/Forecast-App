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
        path={process.env.PUBLIC_URL + "/"}
        render={() => (
          <Home />
        )}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/favorites"}
        render={() => (
          <Favorites />
        )}
      />
    </div>
  );
}

export default App;
