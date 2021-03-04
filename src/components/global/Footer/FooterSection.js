import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import FooterLink from './FooterLink';

function FooterSection({ heading, sectionLinks }) {
  return (
    <VStack
      spacing={['4', '6']}
      align='flex-start'
      w={['45%', 'unset']}
      mb={['6', '0']}
    >
      <Text fontWeight='bold' lineHeight={['17px', '19px']}>
        {heading}
      </Text>
      <VStack spacing={['3', '5']} align='flex-start'>
        {sectionLinks.map((link, index) => (
          <FooterLink linkText={link} key={index} />
        ))}
      </VStack>
    </VStack>
  );
}

export default FooterSection;
