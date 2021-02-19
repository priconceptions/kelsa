import { Stack, VStack, Box } from "@chakra-ui/react"

const SideMenu = () => {
    return (
        <VStack
            width="25%"
            bg="gray.200"
            p={8}
            alignItems="flex-start"
        >
            <Box>
                Hi
            </Box>
            <Box>
                Box
            </Box>
        </VStack>
    )
}

export default SideMenu;