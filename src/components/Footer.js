import React from 'react';
import {IconButton, Flex,  Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction={['column', 'row']}
      paddingY={5}
      mb={0}
      mt="auto"
      align="center"
      justifyContent="center"
      bg="blue.500"
      color="white"
    >
      <Flex direction={['column', 'row']} align="center" justify="center">
        <Link href="https://github.com/ReneMalingre" isExternal>
          <IconButton
            aria-label="Github Profile"
            icon={<FaGithub fontSize="28px" />}
            size="md"
            colorScheme="white"
            variant="ghost"
            marginX={5}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/rene-malingre" isExternal>
          <IconButton
            aria-label="LinkedIn Profile"
            icon={<FaLinkedin fontSize="28px" />}
            size="md"
            colorScheme="teal"
            variant="ghost"
            marginX={5}
          />
        </Link>
        <Link href="https://twitter.com/ReneMalingre" isExternal>
          <IconButton
            aria-label="Twitter Profile"
            icon={<FaTwitter fontSize="28px" />}
            size="md"
            colorScheme="teal"
            variant="ghost"
            marginX={5}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
