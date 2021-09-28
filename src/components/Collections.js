import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { Grid, Text, Image, Card, Link, Select, Flex, Heading } from 'theme-ui';
import { Link as ReactLink } from 'react-router-dom';

const Collections = () => {
  const {
    fetchCollectionsWithProducts,
    collections,
    fetchCollectionWithId,
    collection
  } = useContext(ShopContext);

  const initialId = collections.map((collection) => collection.id);
  const [collectionId, setCollectionId] = useState(initialId[0]);

  const handleChange = (e) => {
    setCollectionId(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCollectionsWithProducts();
    fetchCollectionWithId(collectionId);
  }, [collectionId]);

  if (!collections) return <div>Loadings...</div>;
  console.log('collectionId', typeof collectionId);
  console.log('collectionId', collectionId);
  console.log('collection', collection);
  console.log('collections', collections);

  return (
    <>
      <Heading variant="heading.title">Shop Collections</Heading>

      <Select
        sx={{ my: 1 }}
        value={collectionId}
        onChange={handleChange}
        name="collections">
        {collections.map((collection) => {
          return (
            <option key={collection.id} value={collection.id}>
              {collection.title}
            </option>
          );
        })}
      </Select>

      <Grid columns={[1, 2, 3]} gap={3} marginY="5%">
        {collection.products?.length &&
          collection.products.map((product) => (
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
      </Grid>
    </>
  );
};

export default Collections;
