import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Flex, Spacer, Box, HStack } from "@chakra-ui/react"

import SideMenu from '../components/SideMenu'

export default function Home() {
  return (
    <HStack as="main"
    >
        <SideMenu />
      <Box>
        Content
      </Box>
    </HStack>
  )
}
