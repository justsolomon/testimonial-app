import React from 'react';
import { Box, Button, Image, Text, VStack } from '@chakra-ui/react';
import SuccessIcon from '../../assets/images/success-icon.png';
import FormHeader from './FormHeader';

function SuccessInfo({ reset }) {
  return (
    <VStack>
      <Box>
        <Image src={SuccessIcon} />
      </Box>
      <Box mx='auto' px={['8', '24']} textAlign='center' mb='8'>
        <FormHeader text='Thank you for sharing your story!' success />
        <Text lineHeight={['26px', '28px']}>
          You can view your story in the users' testimonials section on the
          homepage.
        </Text>
      </Box>
      <Button
        h={['50px', '60px']}
        w={['200px', '250px']}
        colorScheme='brand'
        fontSize={['17px', '20px']}
        onClick={reset}
      >
        Close
      </Button>
    </VStack>
  );
}

export default SuccessInfo;
