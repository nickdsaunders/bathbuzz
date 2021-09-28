import React from 'react';
import { Box, Heading, Text, Flex } from '@theme-ui/components';

const RichText = ({ heading, text }) => {
  return (
    <div>
      <Box p={4}>
        <Flex variant="layout.flex.centerColumn" textAlign="center">
          <Heading variant="text.title" py={10}>
            {heading}
          </Heading>
          {text ? <Text pb={10}>{text}</Text> : null}
        </Flex>
      </Box>
    </div>
  );
};

export default RichText;
