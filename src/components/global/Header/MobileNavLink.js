import React from 'react';
import { Link } from '@chakra-ui/react';

function MobileNavLink({ linkText }) {
  return (
    <Link
      href='#'
      color='gray.600'
      fontWeight='medium'
      fontSize='17px'
      mb='1'
      w='100%'
      _hover={{ color: 'brand.500' }}
      _focus={{ color: 'brand.500' }}
    >
      {linkText}
    </Link>
  );
}

export default MobileNavLink;
