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

  initAutocomplete() {
    const searchField = document.getElementById('autocomplete');
    const places = new google.maps.places.Autocomplete(searchField);

    google.maps.event.addListener(places, 'place_changed', (event) => {
      let place = places.getPlace();
      let lat = place.geometry.location.lat();
      let lon = place.geometry.location.lng();

      this.props.updatePlaces(lat, lon);
      this.dropState();
    });
  }

  componentDidMount() {
    this.initAutocomplete();
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
