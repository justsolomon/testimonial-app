import React from 'react';
import { HStack } from '@chakra-ui/react';
import FooterSection from './FooterSection';
import FooterSocialLinks from './FooterSocialLinks';

function FooterSectionList() {
  return (
    <HStack
      align='flex-start'
      spacing='0'
      justify='space-between'
      mt='12'
      pb='12'
      wrap='wrap'
    >
      <FooterSection
        heading='Company'
        sectionLinks={[
          'About us',
          'Term of Use',
          'Privacy Policy',
          'Press & Media',
        ]}
      />
      <FooterSection
        heading='Products'
        sectionLinks={[
          'Marketplace',
          'Magazine',
          'Seller',
          'Wholesale',
          'Services',
        ]}
      />
      <FooterSection
        heading='Careers'
        sectionLinks={[
          'Become a Campus Rep',
          'Become a Vasiti Influencer',
          'Become a Campus writer',
          'Become an Affiliate',
        ]}
      />
      <FooterSection
        heading='Get in touch'
        sectionLinks={[
          'Contact us',
          'Partner with us',
          'Advertise with us',
          'Help/FAQs',
        ]}
      />
      <FooterSocialLinks />
    </HStack>
  );
}

export default FooterSectionList;
