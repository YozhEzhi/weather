
import React from 'react';

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
    <div>
      <span>{name}</span>{' '}
      <span>{humidity}</span>{' '}
      <span>{temp}</span>{' '}
      <span>{description}</span>{' '}
      <span>{country}</span>{' '}
      <span>{icon}</span>{' '}
      <span onClick={removePlace}>X</span>{' '}
    </div>
  );
}
