import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Box, Text, Container } from 'theme-ui';

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  return (
    <>
      {isCartOpen && (
        <Box sx={{ variant: 'layout.box.drawer' }}>
          <Text>This is the Cart</Text>
        </Box>
      )}
    </>
  );
};

export default Cart;
