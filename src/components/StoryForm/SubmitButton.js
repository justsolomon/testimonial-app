import { Button } from '@chakra-ui/react';
import React from 'react';

function SubmitButton({ loading }) {
  return (
    <Button
      type='submit'
      h={['50px', '60px']}
      w={['200px', '250px']}
      colorScheme='brand'
      fontSize={['17px', '20px']}
      isLoading={loading}
    >
      Share your story!
    </Button>
  );
}

export default SubmitButton;
