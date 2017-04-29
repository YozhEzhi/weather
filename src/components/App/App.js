import React from 'react';

import './App.css';
import { DEFAULT_PLACE } from '../../api';
import logo from '../../logo.svg';
import Footer from '../../components/Footer/Footer';
import PlacesContainer from '../../containers/PlacesContainer';
import Search from '../../components/Search/Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updatePlaces = this.props.updatePlaces;
  }

  componentDidMount() {
    if (this.props.places.length) return;

    this.updatePlaces(DEFAULT_PLACE.lat, DEFAULT_PLACE.lon, DEFAULT_PLACE.placeName);
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-inner">
            <div className="app-logo-wrapper">
              <img src={logo} className="app-logo" alt="logo" />
            </div>
            <h2 className="app-title">React weather micro app</h2>
          </div>
        </div>

        <div className="app-content">
          <Search updatePlaces={this.updatePlaces} />
          <PlacesContainer />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
