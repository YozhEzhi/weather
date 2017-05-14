import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

function setup() {
  const props = {
    places: { 524901: {}},
    updatePlaces: () => {},
  }

  const component = shallow(<App {...props} />)

  return {
    props,
    component,
  }
}

describe('App', () => {
  it('should render self and subcomponents', () => {
    const { component } = setup();

    expect(component.find('h2').text()).toBe('React weather micro app');

    const Search = component.find('Search');
    expect(Search).not.toBe(null);
  })
});