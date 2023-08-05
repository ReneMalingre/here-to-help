import React, { useState } from 'react';
import {
  ChakraProvider,
  Container,
  Box,
  CSSReset,
  extendTheme,
} from '@chakra-ui/react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Custom Theme Information
// as a good optometrist, I am using this font due to its readability
// https://www.brailleinstitute.org/freefont
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'oxfordBlue.900',
        color: 'periwinkle.500',
      },
    },
  },
  fonts: {
    heading: 'Atkinson Hyperlegible, sans-serif',
    body: 'Atkinson Hyperlegible, sans-serif',
  },
  colors: {
    oxfordBlue: { 500: '#0A192F', 900: '#02070D' },
    coolGray: { 500: '#8892B0' },
    periwinkle: { 500: '#CCD6F6' },
    turquoise: { 500: '#50D0B8', 600: '#42b6a1' },
  },
});

function App() {
  const [current, setCurrent] = useState('about');

  const handlePageChange = page => {
    console.log('handlePageChange', page);
    setCurrent(page);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Container maxW="1280px" boxShadow="lg" bg="oxfordBlue.500" p={0}>
        <Box
          minH="100vh"
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Header current={current} handlePageChange={handlePageChange} />
          <Main current={current} />
          <Footer />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
