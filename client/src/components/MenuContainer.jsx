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
    text: {
      marginTop: '16px',
      paddingBottom: '32px',
      borderBottom: '1px solid #d8d9db',
      borderTop: '1px solid #d8d9db',
      display: 'block',
      overflow: 'hidden',
      height: '400px',
    },
    gradient: {
      zIndex: 2,
      height:'450px', 
      width:'100%', 
      position:"fixed",
      backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 1)), color-stop(.5,#fff))',
    }
  }

  return (
    <div>
      <div style={styles.gradient}></div>
      <div style={styles.text}>{menuTypeContainers}</div>
    </div>
  );
}

export default MenuContainer;