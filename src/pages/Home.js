import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image, Card } from 'theme-ui';

import { ShopContext } from '../context/shopContext';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log(products);

  if (!products) return <div>Loadings...</div>;

  return (
    <Box>
      <Grid columns={[1, 2, 3]} gap={3}>
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Card
              sx={{
                variant: 'primary'
              }}>
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>${product.variants[0].price}</Text>
            </Card>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
