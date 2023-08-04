import React from 'react';
import ContactForm from './contact/ContactForm';
import {
  Box,
  VStack,
  Heading,
  useMediaQuery,
  Text,
} from '@chakra-ui/react';

function Contact() {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');
  return (
      <VStack align={isNotSmallScreen ? 'start' : 'center'}>
        <Box w="100%">
          <Heading size="lg" mb={2}>Contact Me</Heading>
          <Text mb={4} mx={2} color="turquoise.500">
            If you have any questions or would like to get in touch, please fill out the form below, or via my socials below.
            </Text>
          <ContactForm />
        </Box>
      </VStack>
  );
}
export default Contact;
