import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
