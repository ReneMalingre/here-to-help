import React from 'react';
import ContactForm from './contact/ContactForm';
import {
  Box,
  VStack,
  Heading,
  useMediaQuery,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';

function Contact() {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');
  return (
    <VStack align={isNotSmallScreen ? 'start' : 'center'}>
      <Box w="100%">
        <Heading size="lg" mb={2}>
          Contact Me
        </Heading>
        <Text mb={4} mx={2} color="deepCyan.500">
          If you have any questions or would like to get in touch, please fill
          out the form below, or via my socials below.
        </Text>
        <ContactForm />
      </Box>
      <Box align="center" w="100%" mt={4}>
        <Divider mb={4} borderColor="deepCyan.500" />
        <VStack align="center" spacing={0} ml={5}>
          <Heading as="h2" size="md">
            Contact Details
          </Heading>
          <Box>PO Box 216, Fullarton SA 5063, Australia</Box>
          <Box>
            T:{' '}
            <Link href="tel:0422895267" isExternal>
              0422895267
            </Link>
          </Box>
          <Box>
            E:{' '}
            <Link href="mailto:rene.malingre@gmail.com" isExternal>
              rene.malingre@gmail.com
            </Link>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
}
export default Contact;
