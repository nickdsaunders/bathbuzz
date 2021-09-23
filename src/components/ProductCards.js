import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Text, Image, Card, Flex, Link } from 'theme-ui';
import { Link as ReactLink } from 'react-router-dom';

const ProductCards = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loadings...</div>;

  return (
    <>
      {products.map((product) => (
        <Link
          as={ReactLink}
          sx={{ textDecoration: 'none' }}
          textDecoration="none"
          to={`/products/${product.handle}`}
          key={product.id}>
          <Card variant="interactive" textDecoration="none">
            <Image src={product.images[0].src} />
            <Flex sx={{ justifyContent: 'space-between' }}>
              <Text sx={{ variant: 'text.subtitle' }}>{product.title}</Text>
              <Text sx={{ variant: 'text.subtitle' }}>
                ${product.variants[0].price}
              </Text>
            </Flex>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ProductCards;
