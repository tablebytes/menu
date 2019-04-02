import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../client/src/components/App.jsx';

xdescribe('React Test Suite', () => {
  const wrapper = shallow(<App />);
  test('it displays the correct message on screen', () => {
    expect(wrapper).to('Menu');
  })
});
