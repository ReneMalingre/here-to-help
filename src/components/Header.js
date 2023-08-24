import React from 'react';
import {
  Flex,
  Spacer,
  useBreakpointValue,
  Grid,
  Text,
  Divider,
} from '@chakra-ui/react';
import NavElement from './navigation/NavElement';
import Logo from './navigation/Logo';

function Header({ current, handlePageChange }) {
  const direction = useBreakpointValue({ base: 'column', md: 'row' });
  const gridTemplateColumns = useBreakpointValue({
    base: 'repeat(2, 1fr)',
    md: 'repeat(4, 1fr)',
  });
  const logoSize = useBreakpointValue({ base: '40px', md: '50px' });
  const logoMargin = useBreakpointValue({ base: '1rem', md: '0px' });

  return (
    <Flex
      as="nav"
      px={2}
      py={4}
      mb={4}
      bg="deepCyan.500"
      color="white"
      flexDirection={direction}
      alignItems="center"
    >
      <Flex alignItems="center">
        <Logo width={logoSize} />
        <Text fontSize="2xl" color="headerFooterText.500" ml={4}>
          René Malingré
        </Text>
      </Flex>
      <Spacer mb={logoMargin} />
      {direction === 'column' ? (
        <Divider mb="1rem" borderColor="headerFooterText.500" />
      ) : (
        ''
      )}

      <Grid templateColumns={gridTemplateColumns} gap={2}>
        <NavElement
          id="about"
          title="About Me"
          link="/"
          isSelected={current === 'about'}
          onClick={() => handlePageChange('about')}
        />
        <NavElement
          id="portfolio"
          title="Portfolio"
          link="/"
          isSelected={current === 'portfolio'}
          onClick={() => handlePageChange('portfolio')}
        />
        <NavElement
          id="contact"
          title="Contact"
          link="/"
          isSelected={current === 'contact'}
          onClick={() => handlePageChange('contact')}
        />
        <NavElement
          id="resume"
          title="Résumé"
          link="/"
          isSelected={current === 'resume'}
          onClick={() => handlePageChange('resume')}
        />
      </Grid>
    </Flex>
  );
}

export default Header;
