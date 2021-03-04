import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

function NameInput({ name, label, setName, value }) {
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>
      <Input
        value={value}
        h={['40px', '50px']}
        px={['4', '6']}
        lineHeight='19px'
        fontWeight='medium'
        onChange={(e) => setName(e.target.value)}
        _focus={{ borderColor: 'brand.500' }}
        required
      />
    </FormControl>
  );
}

export default NameInput;
