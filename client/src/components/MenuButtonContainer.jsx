import React from 'react';
import MenuButton from './MenuButton.jsx';

const MenuButtonContainer = ({menus, clickMenu}) => {
  const menuButtons = menus.map(menu => {
    return <MenuButton menu={menu} clickMenu={() => clickMenu(menu)} />
  })
  return (
    <div>{menuButtons}</div>
  )
}

export default MenuButtonContainer;