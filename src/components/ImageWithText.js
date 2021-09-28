import React from 'react';
import { Box, Text, Image, Flex, Heading } from 'theme-ui';

const ImageWithText = ({ reverse, image, heading, text }) => {
  const reverseSection = reverse ? 'row-reverse' : 'row';

  return (
    <Box>
      <Flex sx={{ width: '100%', flexDirection: ['column', reverseSection] }}>
        <Image
          src={image}
          sx={{ objectFit: 'cover', width: ['100%', '50%'] }}
        />
        <Flex
          sx={{
            width: ['100%', '50%'],
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: '2rem'
          }}>
          <Heading variant="text.title">{heading}</Heading>
          <Text variant="text.subtitle">{text}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageWithText;
