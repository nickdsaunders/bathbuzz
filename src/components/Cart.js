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
            flexDirection: 'row'
          }}>
          <Heading>This is the Cart</Heading>
          <Close onClick={() => toggleCart()} />
        </Flex>

        <Flex
          as="body"
          sx={{
            justifyContent: 'space-between',
            flexDirection: 'column'
          }}>
          {checkout.lineItems?.length ? (
            checkout.lineItems.map((item) => (
              <Grid columns={4} gap={1} key={item.id}>
                <Flex variant="layout.flex.cartItems">
                  <Close onClick={() => removeLineItem(item.id)} />
                </Flex>
                <Flex variant="layout.flex.cartItems">
                  <Image src={item.variant.image.src} />
                </Flex>
                <Flex variant="layout.flex.cartItems">
                  <Text>{item.title}</Text>
                </Flex>
                <Flex variant="layout.flex.cartItems">
                  <Text>{item.variant.price}</Text>
                </Flex>
              </Grid>
            ))
          ) : (
            <div>Empty Cart</div>
          )}
        </Flex>

        <Flex
          as="footer"
          sx={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Button>
            <Link href={checkout.webUrl}>Checkout</Link>
          </Button>
        </Flex>
      </Flex>
      <Background />
    </>
  );
};

export default Cart;
