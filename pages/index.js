import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Flex,
  Spacer,
  Box,
  HStack,
  Heading,
  Image,
  Center,
  VStack
} from '@chakra-ui/react';
import { CheckIcon, CalendarIcon } from '@chakra-ui/icons';

import SideMenu from '../components/SideMenu';
import Subscribe from '../components/Subscribe';
import HeroCard from '../components/HeroCard';

export const CheckItem = ({ item, color, checkColor, icon }) => {
  return (
    <Heading as="h2" size="lg" my={4} color={color}>
      <CheckIcon mr={4} color={checkColor} />
      {/* {icon} */}
      {item}
    </Heading>
  );
};

export default function Home() {
  return (
    <>
      <Flex
        flexDirection="row"
        px={10}
        py={20}
        h="100vh"
        bgGradient="linear(to-r, gray.50, blue.100)"
      >
        <Center>
          <Center padding={10}>
            <Flex flexDirection="column" color="gray.600">
              <Heading as="h1" size="4xl" my={4}>
                The CMS that helps you commit
              </Heading>
              <Heading as="h2" size="lg" my={4} color="gray.400">
                Create, edit, preview, and schedule posts for Markdown-based
                sites.
              </Heading>
              <Subscribe />
            </Flex>
          </Center>
          <Box>
            <Image src="/landing/mockup.png" alt="Mockup" />
          </Box>
        </Center>
      </Flex>
      <Flex
        flexDirection="row"
        padding={8}
        bgGradient="linear(to-b, blue.900, blue.100)"
      >
        <Center padding={10}>
          <Flex flexDirection="column" color="whiteAlpha.900">
            <Center p={4}>
              <Box w="60%" mr={8}>
                {[
                  'Schedule posts',
                  'Edit on the go',
                  'View versions of all your content',
                  'Push directly to your git provider',
                  'Host where you want'
                ].map((item) => (
                  <CheckItem
                    color="whiteAlpha.900"
                    checkColor="green.300"
                    item={item}
                    key={item}
                    icon={<CalendarIcon color="green.400" />}
                  />
                ))}
              </Box>
              <Box>
                <Heading as="h1" size="4xl" my={4}>
                  All in one simple editor
                </Heading>
                <Subscribe />
              </Box>
            </Center>
            {/* <HeroCard title="Hi" imageUrl="/landing/content.svg" imageAlt="Content"/> */}
          </Flex>
        </Center>
      </Flex>
      <Flex
        flexDirection="row"
        padding={8}
        bgGradient="linear(to-r, gray.100, blue.100)"
      >
        <Center py={10} px={20}>
          <Box px={20}>
            <Heading as="h1" size="2xl" my={10} color="gray.600">
              We're still in beta. If you want early access, sign up here
            </Heading>
            <Subscribe />
          </Box>
        </Center>
      </Flex>
    </>
  );
}
