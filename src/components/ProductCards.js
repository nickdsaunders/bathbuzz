import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Text, Image, Card, Link } from 'theme-ui';

const ProductCards = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loadings...</div>;

  console.log(products);

  return (
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
  );
};

export default ProductCards;
