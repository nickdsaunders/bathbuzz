import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { ShopContext } from '../context/shopContext';

const Background = () => {
  const { isCartOpen, toggleCart } = useContext(ShopContext);

  return (
    <>
      {isCartOpen && (
        <Box variant="layout.box.drawerBackdrop" onClick={() => toggleCart()} />
      )}
    </>
  );
};

export default Background;
