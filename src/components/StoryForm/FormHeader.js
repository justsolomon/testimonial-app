import React from 'react';
import { Text } from '@chakra-ui/react';

function FormHeader({ text, success }) {
  return (
    <Text
      color='black'
      fontSize={['24px', '28px']}
      lineHeight='34px'
      letterSpacing='-0.02em'
      fontWeight='bold'
      textAlign='center'
      mb={success ? '4' : '8'}
    >
      {text}
    </Text>
  );
}

export default FormHeader;
