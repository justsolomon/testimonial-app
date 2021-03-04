import { Box, HStack, Image, Link } from '@chakra-ui/react';
import Logo from '../../assets/images/logo.svg';
import React from 'react';
import BottomNav from './BottomNav';
import { useMediaQuery } from '@chakra-ui/react';
import TopNav from './TopNav';

function Header() {
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  console.log(isMobile);

  return (
    <Box as='header' mb='8'>
      <HStack py='4' px={['6', '32']} justify='space-between'>
        <Link href='#'>
          <Image src={Logo} />
        </Link>

        {!isMobile && <TopNav />}
      </HStack>
      {!isMobile && <BottomNav />}
    </Box>
  );
}

export default Header;
