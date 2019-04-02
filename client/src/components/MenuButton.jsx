import React from 'react';

const MenuButton = ({menu, clickMenu, currentMenu}) => {
  
  const styles = {
    fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
    outline: 'none',
    boxShadow: 'none',
    marginRight: '16px',
    backgroundColor: '#fff',
    marginTop: '16px',
    fontSize: '14px',
    color: '#2d333',
    cursor: 'pointer',
    lineHeight: '20px',
    fontWeight: 500,
    border: currentMenu === menu ? '2px solid #da3743' : '1px solid #d8d9db',
    borderRadius: '2px',
    padding: '8px 16px',
    display: 'inline-block',
    boxSizing: 'border-box'
  }
  
  return (
    <button style={styles} onClick={clickMenu}>{menu}</button>
  )
}

export default MenuButton;