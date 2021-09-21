import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image, Card, Link } from 'theme-ui';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';
import { ShopContext } from '../context/shopContext';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loadings...</div>;

  console.log(products);

  return (
    <>
      <Hero />
      <Box sx={{ p: 3, maxWidth: 'wide', m: 'auto' }}>
        <Grid columns={[1, 2, 3]} gap={3}>
          {products.map((product) => (
            <Link href={`/products/${product.handle}`} key={product.id}>
              <Card variant="interactive">
                <Image src={product.images[0].src} />
                <Text>{product.title}</Text>
                <Text>${product.variants[0].price}</Text>
              </Card>
            </Link>
          ))}
        </Grid>
        <ImageWithText
          image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
          heading="Heading"
          text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
        />
        <ImageWithText
          reverse
          image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
          heading="Heading"
          text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
        />
      </Box>
    </>
  );
};

export default Home;
