import React, { useContext, useMemo } from 'react';
import { ShopContext } from '../context/shopContext';
import { Flex, Image, IconButton, Box, Badge } from 'theme-ui';
import { MdMenu, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { toggleCart, toggleMenu, checkout } = useContext(ShopContext);

  const cart = useMemo(() => {
    const items = checkout.lineItems?.length
      ? checkout.lineItems.reduce(
          (a, item) => {
            a.totalItems = a.totalItems + item.quantity;
            a.titles.push(item.variant.title);
            return a;
          },
          { totalItems: 0, titles: [] }
        )
      : { totalItems: 0, titles: [] };

    return items;
  }, [checkout.updatedAt]);

  console.log('checkout', checkout);

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
          {/* {checkout.lineItems?.length
            ? checkout.lineItems
                .map((item) => item.quantity)
                .reduce((a, b) => a + b, 0)
            : checkout.lineItems?.length} */}

          {/* {checkout.lineItems?.length
            ? checkout.lineItems.reduce(
                (a, item) => a.totalItems + item.quantity,
                { totalItems: 0 }
              ).totalItems
            : checkout.lineItems?.length} */}
          {cart.totalItems}
          {cart.titles}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
