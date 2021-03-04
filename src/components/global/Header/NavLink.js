import { Link } from '@chakra-ui/react';
import React from 'react';

function NavLink({ linkText }) {
  return (
    <Link
      href='#'
      color='#242120'
      fontSize='13px'
      lineHeight='15px'
      _hover={{ color: 'brand.500' }}
      _focus={{ color: 'brand.500' }}
    >
      {linkText}
    </Link>
  );
}

export default NavLink;
