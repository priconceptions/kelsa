import { Stack, VStack, Box, Image, Button } from '@chakra-ui/react';
import Settings from './components/Settings';
import SiteInfo from './components/SiteInfo';

const SideMenu = ({ session, signOut }) => {
  return (
    <VStack
      maxW="40%"
      bg="gray.100"
      p={8}
      alignItems="flex-start"
      color="gray.700"
    >
      {/* <Box>{session.user.name}</Box>
      <Image src={session.user.image} /> */}
      <SiteInfo orgImage={session.user.image} siteName={session.user.name} />
      <Settings user={session.user.name} />
      <Button onClick={signOut}>Sign Out</Button>
    </VStack>
  );
};

export default SideMenu;
