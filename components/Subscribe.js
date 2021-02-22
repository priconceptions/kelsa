import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Heading,
  useColorMode,
  useToast
} from '@chakra-ui/react';

const Subscribe = ({ heading, message }) => {
  const { colorMode } = useColorMode();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const toast = useToast();

  const cardBorderColor = {
    light: 'orange.300',
    dark: 'orange.200'
  };

  const cardBgColor = {
    light: 'orange.100',
    dark: 'orange.400'
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: emailRef.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'Oops something happened...',
        description: `${error}\n DM me if you can't figure out this issue.`,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }
    emailRef.current.value = '';
    toast({
      title: 'Thank you!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box
      my={4}
      //   p={4}
      //   bg={cardBgColor[colorMode]}
      //   borderWidth="1px"
      //   rounded="lg"
      //   borderColor={cardBorderColor[colorMode]}
    >
      {/* <Heading size="md" mb={2}>
        {heading || 'Newsletter'}
      </Heading>
      <Text my={2}>
        {message || 'Subscribe to get updates from me in your email.'}
      </Text> */}
      <InputGroup size="lg">
        <Input
          bg="whiteAlpha.900"
          pr="4.5rem"
          type={'text'}
          placeholder="Your email..."
          focusBorderColor="blue.400"
          ref={emailRef}
        />
        {/* <InputRightElement width="4.5rem">

        </InputRightElement> */}
        <Button
          // h="1.75rem"
          size="lg"
          // p={}
          px={1}
          fontWeight="bold"
          bg="blue.600"
          color="whiteAlpha.900"
          w="inherit"
          isLoading={loading}
          onClick={submitEmail}
        >
          Get Early Access
        </Button>
      </InputGroup>
    </Box>
  );
};

export default Subscribe;
