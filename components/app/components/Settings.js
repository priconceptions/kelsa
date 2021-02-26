import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

const Settings = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const repoList = async () => {};
  repoList();
  return (
    <>
      <Button
        leftIcon={<SettingsIcon />}
        colorScheme="gray"
        variant="solid"
        onClick={onOpen}
      >
        Settings
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Repository Settings</Tab>
                <Tab>Account Information</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Heading as="h1" size="md">
                    Import Repo
                  </Heading>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Settings;
