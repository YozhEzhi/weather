import React from 'react';

import './App.css';
import logo from '../../logo.svg';
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Search updatePlaces={this.updatePlaces} />
        <PlacesContainer />
      </div>
    );
  }
}

export default App;
