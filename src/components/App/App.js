import React from 'react';

import './App.css';
import logo from '../../logo.svg';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import PlacesContainer from '../../containers/PlacesContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updatePlaces = this.props.updatePlaces;
  }

  componentDidMount() {
    if (this.props.places.length) return;

    const success = (position) => {
      this.updatePlaces(position.coords.latitude, position.coords.longitude);
    }
    const error = (err) => this.setState({ err: err.message });

    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-inner">
            <div className="app-logo-wrapper">
              <img src={logo} className="app-logo" alt="logo" />
            </div>
            <h2 className="app-title">Welcome to React</h2>
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
