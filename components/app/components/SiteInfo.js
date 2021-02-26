import React from 'react';
import { Image, Center, Heading, Button } from '@chakra-ui/react';

const SiteInfo = ({ orgImage, siteName }) => {
  return (
    <Center p={1} color="gray.700">
      <Image mr={3} src={orgImage} boxSize="75px" borderRadius={20} />
      <Heading as="h1" size="md">
        {siteName}
      </Heading>
    </Center>
  );
};

export default SiteInfo;
