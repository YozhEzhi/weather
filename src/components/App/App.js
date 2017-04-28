import React from 'react';

import './App.css';
import logo from '../../logo.svg';
import SearchContainer from '../../containers/SearchContainer';
import PlacesContainer from '../../containers/PlacesContainer';

function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>

      <SearchContainer />
      <PlacesContainer />
    </div>
  );
}

export default App;
