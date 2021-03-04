import { Box, HStack, Image, Tag, Text } from '@chakra-ui/react';
import React from 'react';

function TestimonialCard({ imgSrc, name, description, userType, location }) {
  let tagColor = userType !== 'VENDOR' ? '#0D019A' : '#049A01';
  let tagBG = userType !== 'VENDOR' ? '#EEF8FF' : '#F0FFEE';

  return (
    <Box mb='16'>
      <Box mb='6'>
        <Image src={imgSrc} borderRadius='full' boxSize='200px' alt={name} />
      </Box>
      <Text fontWeight='semibold' fontSize='24px' mb='1' lineHeight='29px'>
        {name}
      </Text>
      <HStack spacing='4' mb='4'>
        {userType !== 'VENDOR' && <Text fontSize='15px'>{location}</Text>}
        <Tag borderRadius='4px' color={tagColor} bg={tagBG}>
          {userType}
        </Tag>
      </HStack>
      <Text lineHeight='150%'>{description}</Text>
    </Box>
  );
}

export default TestimonialCard;
