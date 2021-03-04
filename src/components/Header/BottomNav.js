import React from 'react';
import { HStack } from '@chakra-ui/react';
import NavLink from './NavLink';

function BottomNav() {
  return (
    <HStack
      spacing='16'
      justify='space-between'
      py='4'
      px='60'
      boxShadow='1px 4px 4px rgba(0, 0, 0, 0.04)'
      borderWidth='1px'
      borderColor='rgba(0, 0, 0, 0.08)'
    >
      <NavLink linkText='MARKETPLACE' />
      <NavLink linkText='WHOLESALE CENTER' />
      <NavLink linkText='SELLER CENTER' />
      <NavLink linkText='SERVICES' />
      <NavLink linkText='INTERNSHIPS' />
      <NavLink linkText='EVENTS' />
    </HStack>
  );
}

export default BottomNav;
