// the bulk of the app is here
import React from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import aboutMeData from '../utils/data/aboutMeData';
import { Box } from '@chakra-ui/react';
// this is the main component that will render the different pages
// based on the current state via current prop
function Main({ current }) {
  const renderPage = () => {
    switch (current) {
      case 'about':
        return <AboutMe {...aboutMeData} />;
      case 'portfolio':
        return (
          <section id="portfolio">
            <Portfolio />
          </section>
        );
      case 'contact':
        return (
          <section id="contact">
            <Contact />
          </section>
        );
      case 'resume':
        return (
          <section id="resume">
            <Resume />
          </section>
        );
      default:
        return <AboutMe {...aboutMeData} />;
    }
  };
  return (
    <main>
      <Box p={4}>{renderPage()}</Box>
    </main>
  );
}

export default Main;
