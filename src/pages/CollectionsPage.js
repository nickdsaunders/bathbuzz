import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Text, Image, Card, Link, Select } from 'theme-ui';
import { Link as ReactLink } from 'react-router-dom';
import ProductCards from '../components/ProductCards';
import Collections from '../components/Collections';

const CollectionsPage = () => {
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
      <Box sx={{ p: 3, maxWidth: 'layoutPlus', mx: 'auto' }}>
        {/* <ProductCards /> */}
        <Collections />
      </Box>
    </>
  );
};

export default CollectionsPage;
