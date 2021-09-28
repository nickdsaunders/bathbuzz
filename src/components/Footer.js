import React from 'react';
// import { Link } from 'react-router-dom';
import { Box, Grid, Image, Flex, NavLink } from 'theme-ui';

const Footer = () => {
  return (
    <Box backgroundColor="blue">
      <Grid columns={[1, 3]} gap={3}>
        <Flex>
          <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.png" />
        </Flex>
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white'
          }}>
          <NavLink variant="text.subtitle" href="/" p={2}>
            The Green Blast
          </NavLink>
          <NavLink variant="text.subtitle" href="/" p={2}>
            The Mellow Yellow
          </NavLink>
          <NavLink variant="text.subtitle" href="/" p={2}>
            The Blue Berry
          </NavLink>
        </Flex>
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white'
          }}>
          <NavLink variant="text.subtitle" href="/" p={2}>
            About Us
          </NavLink>
          <NavLink variant="text.subtitle" href="/" p={2}>
            Learn More
          </NavLink>
          <NavLink variant="text.subtitle" href="/" p={2}>
            Sustainability
          </NavLink>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Footer;
