import React, { useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import PaperClip from '../../assets/images/paperclip.png';
import { CloseIcon } from '../../assets/icons/allIcons';

function FileInput({ setImageURL }) {
  const [fileName, setFileName] = useState('Choose Image');

  const createURL = (imageFile) => {
    let reader = new FileReader();
    reader.onload = (e) => setImageURL(e.target.result);
    reader.readAsDataURL(imageFile);
  };

  return (
    <FormControl id='picture-upload'>
      <FormLabel>Upload your Picture</FormLabel>
      <Flex h='50px' border='1px solid #EAEAEA' borderRadius='8px'>
        <Input
          type='file'
          position='absolute'
          opacity='0'
          h={['40px', '50px']}
          cursor='pointer'
          w='100%'
          accept='image/x-png,image/jpeg'
          onChange={(e) => {
            let file = e.target.files[0];
            if (file) {
              createURL(file);
              setFileName(file.name);
            }
          }}
          required
        />
        <HStack
          justify='space-between'
          px={['4', '6']}
          alignItems='center'
          w='100%'
        >
          <Text
            fontWeight={fileName !== 'Choose Image' && 'medium'}
            lineHeight='19px'
          >
            {fileName}
          </Text>
          {fileName !== 'Choose Image' ? (
            <CloseIcon boxSize='24px' />
          ) : (
            <Image src={PaperClip} boxSize='20px' />
          )}
        </HStack>
      </Flex>
    </FormControl>
  );
}

export default FileInput;
