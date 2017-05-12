import React from 'react';
import PropTypes from 'prop-types';

import './Place.css';
import weatherIcons from '../../assets/js/weatherIcons.json';

export default function Place(props) {
  const { place: currentPlace, removePlace, updatePlace } = props;
  const { placeName } = props;
  const { humidity, temp } = currentPlace.main;
  const wind = currentPlace.wind.speed.toFixed(1);
  const code = currentPlace.weather[0].id;
  let icon = weatherIcons[code].icon;

  // Day/night prefix.
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = `day-${icon}`;
  }

  icon = `wi wi-${icon}`;

  return (
    <div className="place">
      <span className="place-inner-item place-name">{placeName}</span>
      <span className="place-inner-item">
        <i className={`place-icon ${icon}`} />
      </span>
      <span className="place-inner-item">Temp.: <br /> {Math.ceil(temp)} &deg;C</span>
      <span className="place-inner-item">Humidity: <br /> {humidity} %</span>
      <span className="place-inner-item">Wind: <br /> {wind} m/s</span>
      <span
        className="place-inner-item place-icon"
        onClick={updatePlace}
        role="button"
        tabIndex="0"
        title="Update place"
      >
        <span className="place-icon-update">
          <span className="place-icon-update-arrow" />
        </span>
      </span>
      <span
        className="place-inner-item place-icon"
        onClick={removePlace}
        role="button"
        tabIndex="0"
        title="Remove place"
      >
        <span className="place-remove" />
      </span>
    </div>
  );
}

Place.propTypes = {
  placeName: PropTypes.string.isRequired,
  removePlace: PropTypes.func.isRequired,
  updatePlace: PropTypes.func.isRequired,
};
