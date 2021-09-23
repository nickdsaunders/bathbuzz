import React from 'react';
import {
  Box,
  Button,
  Text,
  Image,
  Container,
  Flex,
  Heading,
  Link
} from '@theme-ui/components';
import '../index.css';
import { TrackingInContract, BounceInTop } from '../theme/Animations';
import { Link as ReactLink } from 'react-router-dom';

const Hero = () => {
  return (
    <Flex
      sx={{
        variant: 'layout.flex.centerColumn',
        bg: 'pink',
        height: '75vh'
      }}>
      <Flex variant="layout.flex.centerColumn">
        <Image
          sx={{
            animationDelay: '0s',
            animationDuration: '1.5s',
            animationTimingFunction: 'ease-in',
            animationIterationCount: '1',
            animationName: BounceInTop.toString()
          }}
          variant="images.hero"
          src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg"
        />

        <Heading
          sx={{
            animationDelay: '0s',
            animationDuration: '1.2s',
            animationTimingFunction: 'ease-in',
            animationIterationCount: '1',
            animationName: TrackingInContract.toString(),
            variant: 'text.ultratitle',
            color: 'white',
            position: 'relative',
            bottom: '25%'
          }}>
          Introducing Bath Bombs
        </Heading>

        <Button
          sx={{
            variant: 'buttons.secondary',
            width: ['50%', '25%'],
            position: 'relative',
            bottom: '25%'
          }}>
          Shop Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Hero;
