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
import Background from './Background';

const Cart = () => {
  const { isCartOpen, checkout, removeLineItem, toggleCart } =
    useContext(ShopContext);

  console.log(checkout);

  return (
    <>
      <Flex
        variant={isCartOpen ? 'layout.flex.drawerOpen' : 'layout.flex.drawer'}>
        <Flex
          as="header"
          sx={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            mb: 2,
            bg: 'purple',
            p: 3,
            color: 'white',
            boxShadow: 'text'
          }}>
          <Flex variant="layout.flex.cartItems">
            <Heading as="h3">Your Shopping Cart</Heading>
          </Flex>

          <Close color="white" onClick={() => toggleCart()} />
        </Flex>

        <Flex
          as="body"
          sx={{
            justifyContent: 'flex-start',
            flexDirection: 'column',
            flex: 1,
            p: 2
          }}>
          {checkout.lineItems?.length ? (
            checkout.lineItems.map((item) => (
              <Grid columns={5} gap={1} marginBottom={2} key={item.id}>
                <Flex variant="layout.flex.cartItems">
                  <Image src={item.variant.image.src} />
                </Flex>
                <Flex variant="layout.flex.cartItems">
                  <Text>{item.title}</Text>
                </Flex>
                <Flex variant="layout.flex.cartItems">
                  <Text>x {item.quantity}</Text>
                </Flex>
                <Flex variant="layout.flex.cartItems">
                  <Text>${item.variant.price}</Text>
                </Flex>
                <Flex variant="layout.flex.cartItems">
                  <Close onClick={() => removeLineItem(item.id)} />
                </Flex>
              </Grid>
            ))
          ) : (
            <Flex variant="layout.flex.cartItems">
              <Heading as="h4">Your Cart Is Empty</Heading>
              <Text>Lets fix that.</Text>
            </Flex>
          )}
        </Flex>

        <Flex
          as="footer"
          sx={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Button width="100%" mb={3}>
            <Link
              href={checkout.webUrl}
              sx={{
                textDecoration: 'none',
                color: 'white'
              }}>
              Checkout
            </Link>
          </Button>
        </Flex>
      </Flex>
      <Background />
    </>
  );
};

export default Cart;
