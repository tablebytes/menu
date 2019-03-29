import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../client/src/components/App.jsx';
import Test from '../client/src/components/Test.jsx';
import { exportAllDeclaration } from '@babel/types';

describe('WelcomeMessage Test Suite', () => {
  const wrapper = shallow(<App />);
  test('it exists', () => {
    expect(wrapper.text()).toEqual('Hello World!');
  })
});
