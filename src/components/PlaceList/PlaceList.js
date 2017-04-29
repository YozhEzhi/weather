import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Place from '../Place/Place.js';

export default function PlaceList(props) {
  const places = props.places && props.places.length ?
    props.places.map(item => {
      const { place, placeName } = item;

      return (
        <Place
          key={place.id}
          id={place.id}
          place={place}
          placeName={placeName}
          removePlace={() => props.removePlace(place.id)}
        />
      )
    })
    :
    <h3 className="place-empty">No places to show.</h3>;

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
