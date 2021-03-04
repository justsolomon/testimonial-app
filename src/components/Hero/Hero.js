import React from 'react';
import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import HeroImage from '../../assets/images/hero-image.png';

function Hero() {
  return (
    <Stack
      direction={['column', 'row']}
      pl={['6', '32']}
      pr={['6', '0']}
      overflow='hidden'
    >
      <VStack w={['100%', '44%']} align='flex-start'>
        <Text
          fontSize={['32px', '48px']}
          lineHeight={['40px', '60px']}
          fontWeight='bold'
          letterSpacing='-0.02em'
          color='black'
        >
          Amazing Experiences from Our Wonderful Customers
        </Text>
        <Text
          fontSize='18px'
          lineHeight={['28px', '31px']}
          letterSpacing='0.02em'
          color='#494949'
        >
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </Text>
      </VStack>
      <Box w={['100%', '56%']}>
        <Image
          src={HeroImage}
          alt='Hero Illustration'
          w={['150%', '100%']}
          ml={['-33%', '0']}
        />
      </Box>
    </Stack>
  );
}

export default Hero;
