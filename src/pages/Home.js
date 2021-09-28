import React from 'react';
import { Box } from 'theme-ui';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';
import ProductsGallery from '../components/ProductsGallery';
import RichText from '../components/RichText';

const Home = () => {
  return (
    <>
      <Hero />

      <Box sx={{ p: 3, maxWidth: 'wide', m: 'auto' }}>
        <RichText
          heading="The relaxation you’ve been waiting for."
          text="Our Bath bombs guarantee a fun, relaxing, and colorful night."
        />
        <ProductsGallery />
        <RichText heading="Treat yourself!" />
        <ImageWithText
          image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
          heading="We Believe ..."
          text="We believe in making effective products from fresh, organic fruit and vegetables, the finest essential oils, and safe synthetics.

          We invent our own products and fragrances. We make them fresh by hand using little or no preservative or packaging, using only vegetarian ingredients, and tell you when they were made.
          
          We believe in buying ingredients only from companies that do not commission tests on animals and in testing our products on humans."
        />
        <ImageWithText
          reverse
          image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
          heading="What Does Citrus Do for My Skin and Hair?"
          text="Citrus is naturally filled with brightening vitamin C, along with other vital nutrients that tone and detoxify your skin, leaving it looking and feeling refreshed."
        />
      </Box>
    </>
  );
};

export default Home;
