import React from 'react';
import MenuButton from './MenuButton.jsx';

const MenuButtonContainer = ({menus, clickMenu, currentMenu}) => {
  let key = 0;
  const menuButtons = menus.map(menu => {
    key++;
    return <MenuButton key={key} menu={menu} clickMenu={() => clickMenu(menu)} currentMenu={currentMenu} />
  })
  return (
    <div>{menuButtons}</div>
  )
}

export default MenuButtonContainer;