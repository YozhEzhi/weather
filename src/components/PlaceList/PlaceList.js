import React from 'react';

import Place from '../Place/Place.js';

export default function PlaceList(props) {
  const places = props.places && props.places.length ?
    props.places.map(item =>
      <Place
        key={item.id}
        id={item.id}
        place={item}
        removePlace={() => props.removePlace(item.id)}
      />
    )
    :
    <div>No places yet.</div>;

  return (
    <div>
      {places}
    </div>
  );
}
