import React from 'react';
import MenuTypeContainer from './MenuTypeContainer.jsx';

const MenuContainer = ({items}) => {
  let itemObject = {};
  items.forEach(item => {
    if (!itemObject[item.type]) {
      itemObject[item.type] = [];
    }
    itemObject[item.type].push(item);
  });

  let menuTypeContainers = Object.keys(itemObject).map(type => {
    return <MenuTypeContainer items={itemObject[type]} itemsType={type} />
  });

  return (
    <div>{menuTypeContainers}</div>
  );
}

export default MenuContainer;