import React from 'react';
import { shallow } from 'enzyme';

import PlaceList from './PlaceList';

function setup() {
  const props = {
    places: { 524901: {}},
    updatePlaces: () => {},
  }

  const enzymeWrapper = shallow(<PlaceList {...props} />)

  return {
    props,
    enzymeWrapper,
  }
}

describe('PlaceList', () => {
  xit('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('h2').text()).toBe('React weather micro app');

    const Search = enzymeWrapper.find('Search').props();
    expect(Search.updatePlaces).toBeInstanceOf(Function);
  })

  xit('should call addTodo if length of text is greater than 0', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('TodoTextInput');
    input.props().onSave('');
    expect(props.addTodo.mock.calls.length).toBe(0);
    input.props().onSave('Use Redux');
    expect(props.addTodo.mock.calls.length).toBe(1);
  })
});