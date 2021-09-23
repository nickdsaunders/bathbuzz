import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { Grid, Text, Image, Card, Link, Select } from 'theme-ui';
import { Link as ReactLink } from 'react-router-dom';

const Collections = () => {
  const {
    fetchAllProducts,
    products,
    fetchCollectionsWithProducts,
    collections,
    fetchCollectionWithId,
    collection
  } = useContext(ShopContext);

  const [collectionId, setCollectionId] = useState();

  const handleChange = (e) => {
    setCollectionId(e.target.value);
  };

  useEffect(() => {
    fetchCollectionsWithProducts();
    fetchAllProducts();
    fetchCollectionWithId(collectionId);
  }, [
    fetchCollectionsWithProducts,
    fetchAllProducts,
    fetchCollectionWithId,
    collectionId
  ]);

  if (!collections) return <div>Loadings...</div>;
  console.log('collectionId', typeof collectionId);
  console.log('collectionId', collectionId);
  console.log('collection', collection);
  console.log('collections', collections);

  return (
    <>
      <Select
        sx={{ my: 1 }}
        // defaultValue={collections[0].id}
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

      <Grid columns={[1, 2, 3]} gap={3}>
        {/* {!collection &&
          products.map((product) => (
            <Link
              to={`/products/${product.handle}`}
              key={product.id}
              as={ReactLink}>
              <Card variant="interactive">
                <Image src={product.images[0].src} />
                <Text>{product.title}</Text>
                <Text>${product.variants[0].price}</Text>
              </Card>
            </Link>
          ))} */}

        {collection.products?.length &&
          collection.products.map((product) => (
            <Link
              to={`/products/${product.handle}`}
              key={product.id}
              as={ReactLink}>
              <Card variant="interactive">
                <Image src={product.images[0].src} />
                <Text>{product.title}</Text>
                <Text>${product.variants[0].price}</Text>
              </Card>
            </Link>
          ))}
      </Grid>
    </>
  );
};

export default Collections;
