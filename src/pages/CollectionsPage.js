import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Box, Heading } from 'theme-ui';
import Collections from '../components/Collections';

const CollectionsPage = () => {
  const { fetchAllProducts, products, fetchCollectionsWithProducts } =
    useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    fetchCollectionsWithProducts();
  }, [fetchAllProducts, fetchCollectionsWithProducts]);

  if (!products) return <div>Loadings...</div>;

  return (
    <>
      <Box sx={{ p: 3, maxWidth: 'layoutPlus', mx: 'auto' }}>
        <Collections />
      </Box>
    </>
  );
};

export default CollectionsPage;
