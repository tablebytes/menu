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

  const styles = {
    paddingTop: '16px',
    paddingBottom: '32px',
    borderBottom: '1px solid #d8d9db',
    display: 'block',
  }

  return (
    <div style={styles}>{menuTypeContainers}</div>
  );
}

export default MenuContainer;