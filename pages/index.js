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
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

import SideMenu from '../components/SideMenu';
import Subscribe from '../components/Subscribe';
import HeroCard from '../components/HeroCard';

export const CheckItem = ({ item, color, checkColor, icon }) => {
  return (
    <Heading as="h2" size="lg" my={4} color={color}>
      {icon ? icon : <CheckIcon mr={4} color={checkColor} />}
      {item}
    </Heading>
  );
};

export default function Home() {
  return (
    <>
      <Flex
        flexDirection={['column', 'row', 'row']}
        px={[1, 10]}
        py={[1, 20]}
        h={['auto', '100vh']}
        bgGradient={[
          'linear(to-b, gray.50, blue.100)',
          'linear(to-r, gray.50, blue.100)'
        ]}
      >
        <Center flexDirection={['column', 'row', 'row']}>
          <Center padding={[10, 1]}>
            <Flex flexDirection="column" color="gray.600">
              <Heading as="h1" size="4xl" my={4}>
                The CMS that helps you commit
              </Heading>
              <Heading as="h2" size="lg" my={4} color="gray.400">
                Create, edit, preview, and schedule posts for Markdown-based
                sites.
              </Heading>
              <Subscribe message="Get early access" />
            </Flex>
          </Center>
          <Box>
            <Image src="/landing/mockup.png" alt="Mockup" />
          </Box>
        </Center>
      </Flex>
      <Flex
        flexDirection={['column', 'row']}
        padding={2}
        bgGradient={[
          'linear(to-b, gray.600, green.300)',
          'linear(to-r, gray.500, green.200)'
        ]}
      >
        <Center py={[3, 10]} px={[2, 10]} flexDirection={['column', 'row']}>
          <Box w={['100%', '50%']} mr={[0, 8]}>
            <Heading as="h1" size="2xl" my={4}>
              What writing in Markdown looks like today
            </Heading>
            <Box>
              {[
                'Write in a code editor or copy to a code editor',
                `Can't schedule posts`,
                `Hard to collaborate with people who don't know git`,
                'Hard to write on your phone',
                'Difficult to take advantage of browser writing tools like Grammarly'
              ].map((item) => (
                <CheckItem
                  color="whiteAlpha.900"
                  icon={<CloseIcon mr={4} color="red.500" />}
                  item={item}
                  key={item}
                />
              ))}
            </Box>
          </Box>
          <Box w={['100%', '50%']}>
            <Heading as="h1" size="2xl" my={4}>
              What writing with Kelsa looks like
            </Heading>
            <Box>
              {[
                'Write and edit directly in the browser or app',
                `Schedule posts`,
                `Collaborate seamlessly with writers and content creators`,
                'Write anywhere using the mobile app',
                'Write directly in the browser and experience all the power that gives you'
              ].map((item) => (
                <CheckItem
                  color="whiteAlpha.900"
                  icon={<CheckIcon mr={4} color="green.500" />}
                  item={item}
                  key={item}
                />
              ))}
            </Box>
          </Box>
        </Center>
      </Flex>
      <Flex
        flexDirection={['column', 'row']}
        padding={[2, 8]}
        bgGradient={[
          'linear(to-b, blue.900, blue.600)',
          'linear(to-b, blue.900, blue.600)'
        ]}
        // bg="blue.900"
      >
        <Center padding={[2, 10]} flexDirection={['column', 'row']}>
          <Flex flexDirection="column" color="whiteAlpha.900">
            <Center p={[2, 4]} flexDirection={['column', 'row']}>
              <Box w="100%" mr={[0, 8]}>
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
                  />
                ))}
              </Box>
              <Box>
                <Heading as="h1" size="4xl" my={4}>
                  All in one simple editor
                </Heading>
                <Subscribe message="Join the waitlist" />
              </Box>
            </Center>
            {/* <HeroCard title="Hi" imageUrl="/landing/content.svg" imageAlt="Content"/> */}
          </Flex>
        </Center>
      </Flex>
      <Flex
        flexDirection={['column', 'row']}
        padding={[2, 8]}
        bgGradient="linear(to-r, gray.100, blue.100)"
      >
        <Center py={[2, 10]} px={[2, 20]} flexDirection={['column', 'row']}>
          <Box px={[4, 20]}>
            <Heading as="h1" size="2xl" my={10} color="gray.600">
              We're still in beta. If you want early access, sign up here
            </Heading>
            <Subscribe message="Try Kelsa" />
          </Box>
        </Center>
      </Flex>
    </>
  );
}
