import React from 'react';

const google = window.google;

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handlePlaceChange = this.handlePlaceChange.bind(this);
  }

  dropState() {
    this.setState({
      text: '',
      term: '',
    });
  }

  componentDidMount() {
    const success = (position) => {
      const { latitude, longitude } = position.coords;

      this.props.updatePlaces(latitude, longitude);
      this.initAutocomplete();
    }

    function error(err) {
      this.setState({ err: err.message });
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  initAutocomplete() {
    const places = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));

    google.maps.event.addListener(places, 'place_changed', (event) => {
      let place = places.getPlace();
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();

      this.props.updatePlaces(lat, lon);
      this.dropState();
    });
  }

  handlePlaceChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          id="autocomplete"
          onChange={this.handlePlaceChange}
          placeholder="Enter city name"
          value={this.state.term}
        />
      </div>
    );
  }
}
