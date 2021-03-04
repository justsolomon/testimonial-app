import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import TestimonialBlock from '../components/TestimonialBlock/TestimonialBlock';
import ToluAndJoyImage from '../assets/images/tolu-and-joy.png';
import JosiahImage from '../assets/images/josiah.png';
import JosiahMobileImage from '../assets/images/josiah-mobile.png';
import TestimonialCardList from '../components/TestimonialCard/TestimonialCardList';
import customerTestimonials from '../utils/customerTestimonials';
import vendorTestimonials from '../utils/vendorTestimonials';
import Footer from '../components/Footer/Footer';
import { Box, useDisclosure } from '@chakra-ui/react';
import StoryForm from '../components/StoryForm/StoryForm';
import useStorage from '../hooks/useStorage';

function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customerData, setCustomerData] = useState(customerTestimonials);
  const [vendorData, setVendorData] = useState(vendorTestimonials);
  const [loading, setLoading] = useState(false);
  const { storeInStorage } = useStorage();

  useEffect(() => {
    storeInStorage(customerTestimonials, 'customerTestimonials');
    storeInStorage(vendorTestimonials, 'vendorTestimonials');

    //update state with local data
    setCustomerData(JSON.parse(localStorage['customerTestimonials']));
    setVendorData(JSON.parse(localStorage['vendorTestimonials']));
  }, []);

  useEffect(() => {
    if (!loading) {
      //update state with local data
      setCustomerData(JSON.parse(localStorage['customerTestimonials']));
      setVendorData(JSON.parse(localStorage['vendorTestimonials']));
    }
  }, [loading]);

  return (
    <Box>
      <Header />
      <Hero />
      <TestimonialBlock
        imgSrc={ToluAndJoyImage}
        bg='#222222'
        alt='Tolu and Joy'
        heading='Tolu & Joy’s Experience'
        userType='CUSTOMER'
        description='I had the best experience shopping with Vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back! I had the best experience shopping with Vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back!'
        openModal={onOpen}
      />
      <TestimonialCardList testimonials={customerData} />
      <TestimonialBlock
        imgSrc={JosiahImage}
        mobileImg={JosiahMobileImage}
        bg='#FFF8F5'
        alt='Josiah'
        heading='Josiah’s Experience'
        userType='VENDOR'
        description='I had the best experience shopping with Vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back! I had the best experience shopping with Vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back!'
        openModal={onOpen}
        mirror
      />
      <TestimonialCardList testimonials={vendorData} />
      <Footer />
      <StoryForm
        isOpen={isOpen}
        onClose={onClose}
        loading={loading}
        setLoading={setLoading}
      />
    </Box>
  );
}

export default LandingPage;
