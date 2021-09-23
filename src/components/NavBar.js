import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import {
  Flex,
  Image,
  IconButton,
  Box,
  Badge,
  Text,
  Grid,
  Heading
} from 'theme-ui';
import { MdMenu, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { toggleCart, toggleMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 3,
        bg: 'blue'
      }}>
      <IconButton as={MdMenu} variant="icon" onClick={() => toggleMenu()} />
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
          height="100px"
          width="100px"
        />
      </Link>
      <Box>
        <IconButton
          as={MdShoppingCart}
          variant="icon"
          onClick={() => toggleCart()}
        />

        <Badge
          sx={{
            bg: '#FF38BD',
            borderRadius: 'circle'
          }}>
          {checkout.lineItems?.length
            ? checkout.lineItems
                .map((item) => item.quantity)
                .reduce((a, b) => a + b)
            : checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
