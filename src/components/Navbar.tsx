import React from 'react';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Spacer, useBreakpointValue, useColorMode, useDisclosure, VStack } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import NavbarMenu from './NavbarMenu';
import Silvan from './Silvan';
import ActionMenu from './ActionMenu';

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isSmallScreen = useBreakpointValue({ base: true, lg: false})
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
            <Box as="nav"  px={4} py={2} boxShadow="sm">
                <Flex alignItems="center" justifyContent="space-between">
                    <Silvan />

                    {!isSmallScreen && (
                        <>
                            <NavbarMenu as={HStack} />
                            <ActionMenu colorMode={colorMode} toggleColorMode={toggleColorMode} />
                        </>
                    )}

                    {/* Hamburger Icon for Mobile */}
                    {isSmallScreen && (
                        <IconButton
                            aria-label='Open Menu'
                            icon={<FaBars />}
                            size="md"
                            variant="ghost"
                            onClick={onOpen}
                        />
                    )}
                </Flex>

                {/* Drawer for Mobile Navigation */}
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Silvan onClick={onClose} />
                        </DrawerHeader>
                        <DrawerBody>
                            <Flex direction='column' h="100%">
                                <NavbarMenu as={VStack} align="start" spacing={4} onClick={onClose} />
                                <Spacer />
                                <ActionMenu colorMode={colorMode} toggleColorMode={toggleColorMode} />
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
    );
};

export default Navbar;
