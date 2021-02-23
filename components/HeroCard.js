import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const HeroCard = (props) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="md"
      borderColor="whiteAlpha.900"
      overflow="hidden"
      // _hover={{
      //   boxShadow: '2xl',
      //   transform: 'translateY(-1px)',
      //   cursor: 'pointer'
      // }}
    >
      {props.imageAlt && props.imageUrl && (
        <Image
          boxSize="400px"
          maxHeight="200px"
          objectFit="cover"
          src={props.imageUrl}
          alt={props.imageAlt}
        />
      )}
      <Box
        mt="2"
        as="h2"
        lineHeight="tight"
        letterSpacing="tight"
        isTruncated
        fontSize="xl"
        fontWeight="bold"
        overflow="visible"
        whiteSpace="normal"
      >
        {props.title}
      </Box>
    </Box>
  );
};

export default HeroCard;
