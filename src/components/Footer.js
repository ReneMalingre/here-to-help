import React from 'react';
import { Box, IconButton, Flex, Spacer, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction={['column', 'row']}
      p={5}
      mt={2}
      mb={4}
      align="center"
      bg="blue.500"
      color="white"
    >
      <Flex direction={['column', 'row']} align="center" justify="center">
        <Link href="https://github.com/ReneMalingre" isExternal>
          <IconButton
            aria-label="Github Profile"
            icon={<FaGithub fontSize="20px" />}
            size="md"
            colorScheme="teal"
            variant="ghost"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/rene-malingre" isExternal>
          <IconButton
            aria-label="LinkedIn Profile"
            icon={<FaLinkedin fontSize="20px" />}
            size="md"
            colorScheme="teal"
            variant="ghost"
          />
        </Link>
        <Link href="https://twitter.com/ReneMalingre" isExternal>
          <IconButton
            aria-label="Twitter Profile"
            icon={<FaTwitter fontSize="20px" />}
            size="md"
            colorScheme="teal"
            variant="ghost"
          />
        </Link>
      </Flex>
      <Spacer />
      <Link href="#top">
        <Box as="span">Back to top</Box>
      </Link>
    </Flex>
  );
};

export default Footer;
