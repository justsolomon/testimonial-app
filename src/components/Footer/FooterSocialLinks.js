import React from 'react';
import { HStack, Text, VStack } from '@chakra-ui/react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../../assets/icons/allIcons';
import FooterLink from './FooterLink';

function FooterSocialLinks() {
  return (
    <VStack spacing={['5', '6']} align='flex-start'>
      <Text fontWeight='bold' lineHeight={['17px', '19px']}>
        Join our community
      </Text>
      <HStack>
        <FacebookIcon
          color='#25201D'
          boxSize='24px'
          cursor='pointer'
          _hover={{ color: 'brand.500' }}
        />
        <InstagramIcon
          color='#25201D'
          boxSize='24px'
          cursor='pointer'
          _hover={{ color: 'brand.500' }}
        />
        <TwitterIcon
          color='#25201D'
          boxSize='24px'
          cursor='pointer'
          _hover={{ color: 'brand.500' }}
        />
        <LinkedInIcon
          color='#25201D'
          boxSize='24px'
          cursor='pointer'
          _hover={{ color: 'brand.500' }}
        />
      </HStack>

      <FooterLink linkText='Email Newsletter' />
    </VStack>
  );
}

export default FooterSocialLinks;
