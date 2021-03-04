import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import NavLink from './NavLink';

function TopNav() {
  return (
    <HStack spacing={[, , '6', '10']}>
      <NavLink linkText='ABOUT US' />
      <NavLink linkText='STORIES' />
      <NavLink linkText='CONTACT' />
      <NavLink linkText='LOG IN' />
      <Button colorScheme='brand' fontSize='13px' fontWeight='medium'>
        SIGN UP
      </Button>
    </HStack>
  );
}

export default TopNav;
