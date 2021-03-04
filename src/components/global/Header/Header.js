import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import BottomNav from './BottomNav';
import { useMediaQuery } from '@chakra-ui/react';
import TopNav from './TopNav';
import AppLogo from './AppLogo';
import MobileNav from './MobileNav';

function Header() {
  const [isMobile] = useMediaQuery('(max-width: 48em)');

  return (
    <Box as='header' mb='8'>
      <HStack
        py='4'
        px={['6', '12', , '32']}
        justify='space-between'
        align='flex-start'
      >
        <AppLogo />
        <MobileNav />
        {!isMobile && <TopNav />}
      </HStack>
      {!isMobile && <BottomNav />}
    </Box>
  );
}

export default Header;
