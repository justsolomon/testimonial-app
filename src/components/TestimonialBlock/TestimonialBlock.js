import React from 'react';
import {
  Box,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import ButtonLine from '../../assets/images/button-outline.svg';

function TestimonialBlock({
  imgSrc,
  mobileImg,
  bg,
  userType,
  heading,
  description,
  alt,
  openModal,
  mirror,
}) {
  const [isMobile] = useMediaQuery('(max-width: 30em)');

  const userIsCustomer = userType !== 'VENDOR';
  let tagColor = userIsCustomer ? 'white' : 'brand.500';
  let tagBorder = userIsCustomer ? 'white' : 'rgba(255, 92, 0, 0.4)';
  let descriptionColor = userIsCustomer ? 'white' : '#242120';
  let buttonColor = !userIsCustomer && 'brand.500';

  let img = isMobile && mirror ? mobileImg : imgSrc;

  return (
    <Stack
      direction={[
        mirror ? 'column' : 'column-reverse',
        mirror ? 'row-reverse' : 'row',
      ]}
      bg={bg}
      h={['unset', '500px']}
      overflowY='hidden'
      px={['6', '32']}
      pt={['10', '0']}
      justify='space-between'
    >
      <Box w={['100%', '50%']} mt={['8', '24']}>
        <Image
          src={img}
          alt={alt}
          w={[!mirror ? '125%' : '100%', '100%']}
          ml={[!mirror && '-13%', '0']}
          mb={[!mirror ? '-13%' : '12', '0']}
        />
      </Box>
      <VStack
        w={['100%', '45%']}
        alignItems='flex-start'
        color={descriptionColor}
        px='4'
      >
        <Text
          fontWeight='bold'
          fontSize={['24px', '32px']}
          lineHeight={['29px', '39px']}
          pb={['3', '0']}
        >
          {heading}
        </Text>
        <Tag
          variant='outline'
          color={tagColor}
          borderColor={tagBorder}
          fontWeight='normal'
          borderWidth='1px'
          fontSize='13px'
          boxShadow='none'
          borderRadius='4px'
        >
          {userType}
        </Tag>
        <Text
          fontSize={['16px', '18px']}
          py={['4', '8']}
          lineHeight={['24px', '150%']}
        >
          {description}
        </Text>
        <Box mb={['8', '0']}>
          <Text
            letterSpacing='0.2em'
            color={buttonColor}
            cursor='pointer'
            transition='0.3s'
            tabIndex='0'
            onClick={openModal}
            _hover={{ color: mirror ? '#ff9c00' : 'brand.500' }}
          >
            SHARE YOUR OWN STORY!
          </Text>
          <Image src={ButtonLine} />
        </Box>
      </VStack>
    </Stack>
  );
}

export default TestimonialBlock;
