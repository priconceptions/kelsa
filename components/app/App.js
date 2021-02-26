import React from 'react';
import {
  Flex,
  Spacer,
  Box,
  HStack,
  Heading,
  Image,
  Center,
  VStack,
  Button
} from '@chakra-ui/react';
import SideMenu from './SideMenu';

export const App = ({ signOut, session }) => {
  console.log(session);
  return (
    <>
      <SideMenu session={session} signOut={signOut} />
    </>
  );
};

export default App;
