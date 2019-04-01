import React from 'react';

const MenuButton = ({menu, clickMenu}) => {
  
  const styles = {
    marginRight: '16px',
    backgroundColor: '#fff',
    marginTop: '16px',
    fontSize: '14px',
    color: '#2d333',
    cursor: 'pointer',
    lineHeight: '20px',
    fontWeight: 500,
    border: '1px solid #d8d9db',
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