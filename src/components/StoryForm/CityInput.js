import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

function CityInput({ value, setCity }) {
  return (
    <FormControl id='city'>
      <FormLabel>City or Higher Institution (for Students)</FormLabel>
      <Input
        value={value}
        h={['40px', '50px']}
        px={['4', '6']}
        lineHeight='19px'
        _focus={{ borderColor: 'brand.500' }}
        fontWeight='medium'
        onChange={(e) => setCity(e.target.value)}
        required
      />
    </FormControl>
  );
}

export default CityInput;
