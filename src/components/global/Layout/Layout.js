import React from 'react';
import { Box } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
