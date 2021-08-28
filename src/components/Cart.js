import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import {
  Box,
  Text,
  Container,
  Heading,
  Grid,
  Close,
  Flex,
  Image,
  Button,
  Link
} from 'theme-ui';

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  console.log(checkout);

  return (
    <>
      {isCartOpen && (
        <Box sx={{ variant: 'layout.box.drawer' }}>
          <Heading>This is the Cart</Heading>
          <Container>
            {checkout.lineItems &&
              checkout.lineItems.map((item) => (
                <Grid columns={4} gap={1} key={item.id}>
                  <Flex sx={{ variant: 'layout.flex.cartItems' }}>
                    <Close onClick={() => removeLineItem(item.id)} />
                  </Flex>
                  <Flex sx={{ variant: 'layout.flex.cartItems' }}>
                    <Image src={item.variant.image.src} />
                  </Flex>
                  <Flex sx={{ variant: 'layout.flex.cartItems' }}>
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex sx={{ variant: 'layout.flex.cartItems' }}>
                    <Text>{item.variant.price}</Text>
                  </Flex>
                </Grid>
              ))}
          </Container>
          <Button>
            <Link href={checkout.webUrl}>Checkout</Link>
          </Button>
        </Box>
      )}
    </>
  );
};

export default Cart;
