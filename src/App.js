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
    // original
    // oxfordBlue: { 500: '#0A192F', 900: '#02070D' },
    // coolGray: { 500: '#8892B0' },
    // periwinkle: { 500: '#CCD6F6' },
    // turquoise: { 500: '#50D0B8', 600: '#42b6a1' },
    // classic and neutral
    // deepBlue: { 500: '#1E2A38', 900: '#0D131A' },
    // slateGray: { 500: '#708297' },
    // softGray: { 500: '#D0D5E2' },
    // navyBlue: { 500: '#2F4D75', 600: '#253a5b' },
    // headerFooterText: { 500: '#ECEFF4' },
    // earthy and trustworthy
    // charcoal: { 500: '#2E3338', 900: '#1A1C1D' },
    // oliveGray: { 500: '#7F8C8D' },
    // clay: { 500: '#BDC3C7' },
    // forestGreen: { 500: '#407D63', 600: '#33624f' },
    // modern and minimalist
    spaceGray: { 500: '#2D313D', 900: '#181A20' },
    mutedCyan: { 500: '#7FA8A5' },
    lightGray: { 500: '#EBEBEB' },
    deepCyan: { 500: '#2A6866', 600: '#204d4c' },
    headerFooterText: { 500: '#F5F7FA' }, // Added for contrast against deepCyan
  },
});

function App() {
  const [current, setCurrent] = useState('about');

  const handlePageChange = page => {
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
