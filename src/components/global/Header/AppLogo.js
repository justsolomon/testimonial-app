import React from 'react';
import { Image, Link } from '@chakra-ui/react';
import Logo from '../../../assets/images/logo.svg';

function AppLogo() {
  return (
    <Link href='#'>
      <Image src={Logo} />
    </Link>
  );
}

export default AppLogo;
