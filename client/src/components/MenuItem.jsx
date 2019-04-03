import React from 'react';

const MenuItem = ({item}) => {

  const styles = {
    container: {
      fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      marginTop: 0,
      marginBottom: '16px',
      // overflow: 'hidden',
      // webkitColumnBreakInside: avoid;
      pageBreakInside: 'avoid',
      breakInside: 'avoid',
    },
    p: {
      fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      marginTop: '8px',
      marginBottom: 0,
      fontWeight: 300,
      display: 'block',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
      fontSize: '14px',
      lineHeight: '20px',
    },
    price: {
      fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      float: 'right',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 600,
    }
  }

  let price = item.price ? item.price.toString() : 0;
  let foundDecimal = false;
  let trailingZerosNeeded = 2;
  for (let i = 0; i < price.length; i++) {
    if (foundDecimal) {
      trailingZerosNeeded--;
    }
    if (price.charAt(i) === '.') {
      foundDecimal = true;
    }
  }
  if (!foundDecimal) {
    price = price + '.';
  }
  for (let j = trailingZerosNeeded; j > 0; j--) {
    price = price + '0';
  }


  return (
    <div style={styles.container}>
      <div style={styles.price}>${price}</div>
      <div>{item.item}</div>
      <div style={styles.p}>{item.description}</div>
    </div>
  );
}

export default MenuItem;