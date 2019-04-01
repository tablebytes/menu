import React from 'react';
import MenuItem from './MenuItem.jsx';

const MenuTypeContainer = ({itemsType, items}) => {
  const menuItems = items.map(item => {
    return <MenuItem item={item}/>;
  });

  return (
    <div>
      <h3>{itemsType}</h3>
      <p>{menuItems}</p>
    </div>
  );
}

export default MenuTypeContainer;