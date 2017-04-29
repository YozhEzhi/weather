import React from 'react';

import './Place.css';
import weatherIcons from '../../assets/js/weatherIcons';

export default function Place(props) {
  const { place: currentPlace, removePlace } = props;
  const { placeName } = props;
  const { humidity, temp } = currentPlace.main;
  const wind = currentPlace.wind.speed;
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
        <i className={`place-icon ${icon}`}></i>
      </span>
      <span className="place-inner-item">{temp} &deg;C</span>
      <span className="place-inner-item">Humidity: <br /> {humidity} %</span>
      <span className="place-inner-item">Wind: <br /> {wind} m/s</span>
      <span className="place-inner-item" title="Remove place">
        <span className="place-remove" onClick={removePlace} />
      </span>
    </div>
  );
}
