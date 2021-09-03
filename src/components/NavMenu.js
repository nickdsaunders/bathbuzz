import React, { useContext } from 'react';

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
  Link,
  NavLink
} from 'theme-ui';

import Background from './Background';

import { ShopContext } from '../context/shopContext';

const NavMenu = () => {
  const { isMenuOpen, toggleMenu } = useContext(ShopContext);

  return (
    <>
      <Flex
        variant={
          isMenuOpen ? 'layout.flex.drawerLeftOpen' : 'layout.flex.drawerLeft'
        }>
        <Flex as="header" variant="layout.flex.drawerHeader">
          <Flex variant="layout.flex.cartItems">
            <Heading as="h3">Menu</Heading>
          </Flex>
          <Close color="white" onClick={() => toggleMenu()} />
        </Flex>

        <Flex
          as="nav"
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flex: 1,
            p: 2
          }}>
          <NavLink variant="text.subtitle" href="#!" p={2}>
            About Us
          </NavLink>
          <NavLink variant="text.subtitle" href="#!" p={2}>
            Learn More
          </NavLink>
          <NavLink variant="text.subtitle" href="#!" p={2}>
            Sustainability
          </NavLink>
        </Flex>
      </Flex>
      <Background />
    </>
  );
};

export default NavMenu;
