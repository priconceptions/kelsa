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
import { Octokit } from '@octokit/core';
import { createAppAuth } from '@octokit/auth-app';

const Settings = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(process.env.GITHUB_CLIENT_ID);
  const appOctokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: parseInt(102043, 10),
      privateKey: '',
      clientId: '',
      clientSecret: ''
    }
  });

  const data = async () => await appOctokit.request('/app');

  const repoList = async () => {
    const repos = await appOctokit.request('GET /orgs/{org}/repos', {
      org: `${user}`
    });
    return repos;
  };
  console.log(data(), repoList());

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
