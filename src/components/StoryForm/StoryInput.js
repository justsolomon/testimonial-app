import React from 'react';
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';

function StoryInput({ value, setStory }) {
  return (
    <FormControl id='share-story'>
      <FormLabel>Share your story</FormLabel>
      <Textarea
        h={['80px', '100px']}
        px={['4', '6']}
        pt='3'
        lineHeight='28px'
        fontWeight='medium'
        _focus={{ borderColor: 'brand.500' }}
        value={value}
        onChange={(e) => setStory(e.target.value)}
        required
      />
    </FormControl>
  );
}

export default StoryInput;
