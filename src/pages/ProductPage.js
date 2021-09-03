import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Image, Text, Button, Heading, Flex } from 'theme-ui';

const ProductPage = () => {
  const { handle } = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <Box>
      <Grid columns={[1, 2]}>
        <Image src={product.images[0].src} />
        <Flex
          sx={{
            justifyContent: 'space-between',
            flexDirection: 'column',
            flex: 1
          }}>
          <Heading variant="text.ultratitle">{product.title}</Heading>
          <Text>{product.variants[0].price}</Text>
          <Text>{product.description}</Text>
          <Button
            variant="primary"
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
            }}>
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
