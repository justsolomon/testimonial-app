import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

function UserTypeInput({ value, setType }) {
  return (
    <FormControl as='fieldset'>
      <Stack direction={['column', 'row']} align='flex-start'>
        <FormLabel>What did you interact with Vasiti as?</FormLabel>
        <RadioGroup value={value} onChange={(value) => setType(value)}>
          <HStack spacing='24px'>
            <Radio value='CUSTOMER' colorScheme='brand'>
              Customer
            </Radio>
            <Radio value='VENDOR' colorScheme='brand'>
              Vendor
            </Radio>
          </HStack>
        </RadioGroup>
      </Stack>
    </FormControl>
  );
}

export default UserTypeInput;
