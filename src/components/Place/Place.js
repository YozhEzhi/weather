import React from 'react';

import './Place.css';

export default function Place(props) {
  const { place } = props;
  const name = place.name;
  const humidity = place.main.humidity;
  const temp = place.main.temp;
  const country = place.sys.country;
  const description = place.weather[0].description;
  const icon = place.weather[0].icon;
  const removePlace = props.removePlace;

  return (
    <div className="place">
      <span>{name}</span>{' '}
      <span>{humidity}</span>{' '}
      <span>{temp}</span>{' '}
      <span>{description}</span>{' '}
      <span>{country}</span>{' '}
      <span>{icon}</span>{' '}
      <span className="place-remove" onClick={removePlace} />
    </div>
  );
}
