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
    <Box
      backgroundColor="#FFA8E2"
      width="50px"
      position="relative"
      height="70vh">
      {/* <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          bg: 'red'
        }}> */}
      <Image
        margin="auto"
        height="100%"
        objectFit="contain"
        objectPosition="center"
        src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg"
      />
      {/* <Text
        className="tracking-in-expand-fwd"
        position="absolute"
        bottom="20%"
        width="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem">
        Introducing Bath Bombs
      </Text> */}
      <Flex
        sx={{
          flexDirection: 'column',
          position: 'absolute',
          bottom: '20%',
          width: '100%',
          justifyContent: 'center'
        }}>
        <Text
          sx={{ textAlign: 'center', flex: 1 }}
          variant="text.ultratitle"
          color="white">
          Introducing Bath Bombs
        </Text>
        <Button
          width="25%"
          backgroundColor="#FF38BD"
          color="white"
          _hover={{ opacity: '70%' }}
          position="absolute"
          bottom="10%">
          Shop Now
        </Button>
      </Flex>
    </Box>
  );
};

export default Hero;
