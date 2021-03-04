import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import AppLogo from './AppLogo';
import { HamburgerIcon } from '@chakra-ui/icons';
import MobileTopNav from './MobileTopNav';

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box d={['block', , 'none']}>
      <IconButton
        variant='ghost'
        p='0'
        h='20px'
        minWidth='20px'
        aria-label='Open mobile navigation'
        icon={<Icon as={HamburgerIcon} boxSize='26px' />}
        onClick={onOpen}
      />
      <Drawer size='full' isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody px='6' pt='4'>
              <HStack align='center' mb='4'>
                <AppLogo />
                <DrawerCloseButton mr='6' pt='4' w='0' h='30px' size='lg' />
              </HStack>
              <MobileTopNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
