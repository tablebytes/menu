import React from 'react';
import MenuButton from './MenuButton.jsx';

const MenuButtonContainer = ({menus, clickMenu, currentMenu}) => {
  const menuButtons = menus.map(menu => {
    return <MenuButton menu={menu} clickMenu={() => clickMenu(menu)} currentMenu={currentMenu} />
  })
  return (
    <div>{menuButtons}</div>
  )
}

export default MenuButtonContainer;