import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../client/src/components/App.jsx';

describe('WelcomeMessage Test Suite', () => {
  const wrapper = shallow(<App />);
  test('it exists', () => {
    expect(wrapper.text()).toEqual('Hello World!');
  })
});
