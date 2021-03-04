import React from 'react';
import { Button, VStack } from '@chakra-ui/react';
import MobileNavLink from './MobileNavLink';

function MobileTopNav() {
  return (
    <VStack spacing='4' w='100%' align='flex-start' mt='8'>
      <MobileNavLink linkText='ABOUT US' />
      <MobileNavLink linkText='STORIES' />
      <MobileNavLink linkText='CONTACT' />
      <MobileNavLink linkText='MARKETPLACE' />
      <MobileNavLink linkText='WHOLESALE CENTER' />
      <MobileNavLink linkText='SELLER CENTER' />
      <MobileNavLink linkText='SERVICES' />
      <MobileNavLink linkText='INTERNSHIPS' />
      <MobileNavLink linkText='EVENTS' />
      <Button
        colorScheme='brand'
        variant='outline'
        fontSize='17px'
        height='50px'
        fontWeight='medium'
        w='100%'
      >
        LOG IN
      </Button>
      <Button
        colorScheme='brand'
        fontSize='17px'
        height='50px'
        fontWeight='medium'
        w='100%'
      >
        SIGN UP
      </Button>
    </VStack>
  );
}

export default MobileTopNav;
