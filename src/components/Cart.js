import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Box, Text, Container, Heading, Grid } from 'theme-ui';

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  return (
    <>
      {isCartOpen && (
        <Box sx={{ variant: 'layout.box.drawer' }}>
          <Heading>This is the Cart</Heading>
          <Container>
            {checkout.lineItems &&
              checkout.lineItems.map((item) => (
                <Grid columns={[4]} gap={1} keys={item.id}>
                  <Text>{item.title}</Text>
                </Grid>
              ))}
          </Container>
        </Box>
      )}
    </>
  );
};

export default Cart;
