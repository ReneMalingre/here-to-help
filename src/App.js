import React, { useState, useRef, useEffect } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  const [current, setCurrent] = useState("about");
  
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const resumeRef = useRef();
  const refs = { about: aboutRef, portfolio: portfolioRef, contact: contactRef, resume: resumeRef };

  useEffect(() => {
    refs[current].current.scrollIntoView({ behavior: "smooth" });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <ChakraProvider theme={theme}>
      <Header current={current} setCurrent={setCurrent} />
      <Main refs={refs} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
