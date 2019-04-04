import React from 'react';
import { shallow } from 'enzyme';
// Components
import App from '../client/src/components/App.jsx';
import MenuItem from '../client/src/components/MenuItem.jsx';
import MenuTypeContainer from '../client/src/components/MenuTypeContainer.jsx';
import MenuContainer from '../client/src/components/MenuContainer.jsx';
import MenuButtonContainer from '../client/src/components/MenuButtonContainer.jsx';
import MenuButton from '../client/src/components/MenuButton.jsx';

describe('React Test Suite', () => {
  const items = [{
    "item": "Granite Chips",
    "description": "Small Frozen Pants.",
    "menu": "Weekend",
    "type": "Sides",
    "price": 11.20,
  },
  {
    "item": "Frozen Fish",
    "description": "Sleek Soft Chicken.",
    "menu": "Weekend",
    "type": "Sides",
    "price": 6.67,
  },
  {
    "item": "Soft Tuna",
    "description": "Generic Cotton Chair.",
    "menu": "Dinner",
    "type": "Special",
    "price": 8.46,
  },
  {
    "item": "Cotton Pants",
    "description": "Generic Plastic Tuna with Sleek Frozen Pants.",
    "menu": "Breakfast",
    "type": "Entrees",
    "price": 7.1,
  }]

  describe('MenuItem', () => {
    const wrapper = shallow(<MenuItem item={items[0]}/>);

    test('it displays the correct item components on screen', () => {
      expect(wrapper.find('div.itemContainer')).toHaveLength(1);
      expect(wrapper.find('div.itemPrice')).toHaveLength(1);
      expect(wrapper.find('div.itemName')).toHaveLength(1);
      expect(wrapper.find('div.itemDescription')).toHaveLength(1);
    });

    test('each component is displayed in the correct div', () => {
      expect(wrapper.find('div.itemPrice').text()).toBe('$11.20');
      expect(wrapper.find('div.itemName').text()).toBe('Granite Chips');
      expect(wrapper.find('div.itemDescription').text()).toBe('Small Frozen Pants.');
    });
  });

  describe('MenuTypeContainer', () => {
    const sideItems = [items[0], items[1]];

    const wrapper = shallow(<MenuTypeContainer 
      itemsType={'Sides'}
      items={sideItems}
      lastType={false}/>);

    test('it displays the correct menu type', () => {
      expect(wrapper.find('h3.menuTypeHeader').text()).toBe('Sides');
    });

    test('it displays the correct number of items', () => {
      expect(wrapper.find('MenuItem')).toHaveLength(2);
    })
  });

  describe('MenuContainer', () => {
    const wrapper = shallow(<MenuContainer items={items} />);

    test('it displays the correct number of type containers', () => {
      expect(wrapper.find('MenuTypeContainer')).toHaveLength(3);
    });
  });

  describe('MenuButtonContainer', () => {
    const menus = ['Weekend', 'Breakfast', 'Dinner'];
    const wrapper = shallow(<MenuButtonContainer menus={menus} />);

    test('it should display the correct number of buttons', () => {
      expect(wrapper.find('MenuButton')).toHaveLength(3);
    });

    test('it should give the buttons their correct names', () => {
      expect(wrapper.first(MenuButton).props().children[0].props.menu).toBe('Weekend');
    });
  });
});
