import React from 'react';
import { Link } from '@chakra-ui/react';

function FooterLink({ linkText }) {
  return (
    <Link
      href='#'
      lineHeight='16px'
      fontSize={['15px', '16px']}
      _hover={{ color: 'brand.500' }}
      _focus={{ color: 'brand.500' }}
    >
      {linkText}
    </Link>
  );
}

export default FooterLink;
