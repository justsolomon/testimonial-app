import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useStorage from '../../hooks/useStorage';
import CityInput from './CityInput';
import FileInput from './FileInput';
import FormHeader from './FormHeader';
import NameInput from './NameInput';
import StoryInput from './StoryInput';
import SubmitButton from './SubmitButton';
import SuccessInfo from './SuccessInfo';
import UserTypeInput from './UserTypeInput';

function StoryForm({ isOpen, onClose, loading, setLoading }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [story, setStory] = useState('');
  const [userType, setUserType] = useState('CUSTOMER');
  const [imageURL, setImageURL] = useState('');
  const [success, setSuccess] = useState(false);
  const { updateStorage } = useStorage();

  const submitStory = () => {
    setLoading(true);

    let data = {
      name: `${firstName} ${lastName}`,
      userType,
      description: story,
      imgSrc: imageURL,
    };
    if (userType === 'CUSTOMER') data.location = city;

    updateStorage(data, userType);
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);

      //reset state
      setFirstName('');
      setLastName('');
      setCity('');
      setStory('');
      setUserType('CUSTOMER');
    }, 1000);
  };

  const resetModal = () => {
    onClose();
    setSuccess(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size='xl'
      scrollBehavior='inside'
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClick={resetModal} />
        <ModalBody my='12'>
          {!success ? (
            <>
              <FormHeader text='Share your amazing story!' />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitStory();
                }}
              >
                <VStack spacing='6' align='flex-end' color='#4A4A4A'>
                  <FileInput setImageURL={setImageURL} />
                  <Stack
                    direction={['column', 'row']}
                    spacing={['6', '5']}
                    w='100%'
                  >
                    <NameInput
                      value={firstName}
                      setName={setFirstName}
                      name='first-name'
                      label='First Name'
                    />
                    <NameInput
                      value={lastName}
                      setName={setLastName}
                      name='last-name'
                      label='Last Name'
                    />
                  </Stack>
                  <StoryInput value={story} setStory={setStory} />
                  <UserTypeInput value={userType} setType={setUserType} />
                  {userType === 'CUSTOMER' && (
                    <CityInput value={city} setCity={setCity} />
                  )}
                  <SubmitButton loading={loading} submit={submitStory} />
                </VStack>
              </form>
            </>
          ) : (
            <SuccessInfo reset={resetModal} userType={userType} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default StoryForm;
