import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
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
    <Box sx={{ p: 3, maxWidth: 'layoutPlus', mx: 'auto', my: [0, '10%'] }}>
      <Grid columns={[1, 2]} gap={5} m="auto">
        <Flex justifyContent="center" alignItems="center">
          <Image src={product.images[0].src} />
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}>
          <Heading variant="text.ultratitle">{product.title}</Heading>
          <Text variant="text.subtitle">${product.variants[0].price}</Text>
          <Text>{product.description}</Text>

          <Button
            sx={{ alignSelf: 'stretch' }}
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
