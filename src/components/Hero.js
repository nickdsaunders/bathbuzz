import React from 'react';
import {
  Box,
  Button,
  Text,
  Image,
  Container,
  Flex,
  Heading
} from '@theme-ui/components';

const Hero = () => {
  return (
    <Box sx={{ bg: '#FFA8E2', position: 'relative', height: '75vh' }}>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
        <Image
          sx={{
            display: 'block',
            margin: 'auto',
            objectFit: 'contain',
            objectPosition: 'center',
            width: '50%',
            position: 'relative'
          }}
          src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg"
        />

        <Heading
          sx={{
            variant: 'text.ultratitle',
            color: 'white',
            position: 'relative',
            bottom: '100px'
          }}>
          Introducing Bath Bombs
        </Heading>
        <Button
          sx={{
            variant: 'buttons.secondary',
            width: '25%',
            position: 'relative',
            bottom: '100px'
          }}>
          Shop Now
        </Button>
      </Flex>
    </Box>
  );
};

export default Hero;
