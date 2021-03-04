import React from 'react';
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import FooterHero from '../../../assets/images/footer-hero-image.png';
import FooterSectionList from './FooterSectionList';

function Footer() {
  return (
    <Box
      bg='#25201D'
      color='white'
      px={['6', , '12', , '32']}
      mt='12'
      pt={['12', , '0']}
    >
      <HStack justify='space-between' px={['0', , , '8', '16']}>
        <Box mt='-12' display={['none', , 'block']}>
          <Image
            src={FooterHero}
            alt='Footer Hero Illustration'
            w={[, , '100%', 'unset']}
          />
        </Box>
        <VStack w={['100%', , '38%']}>
          <Text
            fontWeight='bold'
            lineHeight={['28px', , '32px', '40px']}
            fontSize={['26px', , '32px', '40px']}
            mb='2'
          >
            Be a member of our community 🎉
          </Text>
          <Text fontSize='14px' mb='6' lineHeight='20px'>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </Text>
          <InputGroup>
            <Input
              h='50px'
              type='email'
              placeholder='Enter your email address'
              fontSize='14px'
              bg='rgba(255, 255, 255, 0.2)'
              borderRadius='6px'
              border='none'
            />
            <InputRightElement w='120px' h='50px'>
              <Button fontSize='13px' bg='white' color='#242120'>
                SUBSCRIBE
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </HStack>

      <FooterSectionList />
    </Box>
  );
}

export default Footer;
