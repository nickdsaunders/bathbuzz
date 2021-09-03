import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { ShopContext } from '../context/shopContext';

const Background = () => {
  const { isCartOpen, toggleCart, isMenuOpen, toggleMenu } =
    useContext(ShopContext);

  return (
    <>
      {isCartOpen && (
        <Box variant="layout.box.drawerBackdrop" onClick={() => toggleCart()} />
      )}
      {isMenuOpen && (
        <Box variant="layout.box.drawerBackdrop" onClick={() => toggleMenu()} />
      )}
    </>
  );
};

export default Background;
