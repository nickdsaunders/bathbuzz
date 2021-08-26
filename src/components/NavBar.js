import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Flex, Text, Image, IconButton, MenuButton } from 'theme-ui';
import { MdMenu, MdShoppingCart } from 'react-icons/md';

const NavBar = () => {
  const { openCart, openMenu, chekcout } = useContext(ShopContext);

  return (
    <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        p: 4,
        bg: 'smoke'
      }}>
      <IconButton as={MdMenu} sx={{ fill: 'slate' }} />
      <Image
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
        w={100}
        h={100}
      />
      <IconButton as={MdShoppingCart} sx={{ fill: 'slate' }} />
    </Flex>
  );
};

export default NavBar;
