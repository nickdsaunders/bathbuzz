import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Text, Image, Card, Link, Select } from 'theme-ui';
import { Link as ReactLink } from 'react-router-dom';
import ProductCards from './ProductCards';
import Collections from './Collections';

const ProductsGallery = () => {
  const {
    fetchAllProducts,
    products,
    fetchCollectionsWithProducts,
    collections
  } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    fetchCollectionsWithProducts();
  }, [fetchAllProducts, fetchCollectionsWithProducts]);

  if (!products) return <div>Loadings...</div>;

  return (
    <>
      <Grid columns={[1, 2, 3]} gap={3}>
        <ProductCards />
        {/* <Collections /> */}
      </Grid>
    </>
  );
};

export default ProductsGallery;
