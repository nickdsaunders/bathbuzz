import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import {
  Text,
  Heading,
  Grid,
  Close,
  Flex,
  Image,
  Button,
  Link,
  Input
} from 'theme-ui';
import Background from './Background';

const Cart = () => {
  const { isCartOpen, checkout, removeLineItem, updateLineItem, toggleCart } =
    useContext(ShopContext);

  console.log(checkout);

  return (
    <>
      <Flex
        variant={isCartOpen ? 'layout.flex.drawerOpen' : 'layout.flex.drawer'}>
        <Flex as="header" variant="layout.flex.drawerHeader">
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
            p: 3
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
                  <Input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) => updateLineItem(item.id, e.target.value)}
                  />
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
            p: 3,
            flexDirection: 'column'
          }}>
          <Flex
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: '50px',
              alignItems: 'center'
            }}>
            <Text variant="text.subtitle">Subtotal:</Text>
            <Text variant="text.subtitle">${checkout.subtotalPrice}</Text>
          </Flex>

          <Button sx={{ alignSelf: 'stretch' }}>
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
