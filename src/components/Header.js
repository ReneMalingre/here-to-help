import React from 'react';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import NavElement from './navigation/NavElement';

function Header({ current, handlePageChange }) {
  return (
    <Flex as="nav" px={2} py={4} mb={4} bg="turquoise.500" color="white">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Logo
        </Text>
      </Box>
      <Spacer />
      <Box display="flex">
        <NavElement
          id="about"
          title="About Me"
          link="/"
          isSelected={current === 'about'}
          onClick={() => handlePageChange('about')}
        />
        <Box px={4} />
        <NavElement
          id="portfolio"
          title="Portfolio"
          link="/"
          isSelected={current === 'portfolio'}
          onClick={() => handlePageChange('portfolio')}
        />
        <Box px={4} />
        <NavElement
          id="contact"
          title="Contact"
          link="/"
          isSelected={current === 'contact'}
          onClick={() => handlePageChange('contact')}
        />
        <Box px={4} />
        <NavElement
          id="resume"
          title="Resumé"
          link="/"
          isSelected={current === 'resume'}
          onClick={() => handlePageChange('resume')}
        />
      </Box>
    </Flex>
  );
}

export default Header;
