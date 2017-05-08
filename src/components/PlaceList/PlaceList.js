import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Place from '../Place/Place.js';

export default function PlaceList(props) {
  let places = [];
  const isNotEmpty = Object.keys(props.places).length > 0;

  if (props.places && isNotEmpty) {
    for (let key in props.places) {
      const { place, placeName } = props.places[key];

      places.push((
        <Place
          key={place.id}
          id={place.id}
          place={place}
          placeName={placeName}
          removePlace={() => props.removePlace(place.id)}
          updatePlace={() => props.updatePlace(place.id)}
        />
      ));
    }
  } else {
    places = <h3 className="place-empty">No places to show.</h3>;
  }

  return (
    <div>
      <CSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {places}
      </CSSTransitionGroup>
    </div>
  );
}
