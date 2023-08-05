import React from 'react';
import { IconButton, Flex, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
 return (
   <Flex
     as="footer"
     direction="column"
     paddingY={1}
     mb={0}
     mt="auto"
     align="center"
     justifyContent="center"
     bg="turquoise.500"
     color="white"
   >
     <Flex direction={['column', 'row']} align="center" justify="center" mb={2}>
       <Link href="https://github.com/ReneMalingre" isExternal mx={5}>
         <IconButton
           aria-label="Github Profile"
           icon={<FaGithub fontSize="32px" />}
           size="md"
           color="oxfordBlue.500"
           variant="ghost"
           _hover={{ color: 'turquoise.500', bg: 'oxfordBlue.500' }}
         />
       </Link>
       <Link href="https://www.linkedin.com/in/rene-malingre" isExternal mx={5}>
         <IconButton
           aria-label="LinkedIn Profile"
           icon={<FaLinkedin fontSize="28px" />}
           size="md"
           color="oxfordBlue.500"
           variant="ghost"
           _hover={{ color: 'turquoise.500', bg: 'oxfordBlue.500' }}
         />
       </Link>
       <Link href="https://twitter.com/ReneMalingre" isExternal mx={5}>
         <IconButton
           aria-label="Twitter Profile"
           icon={<FaTwitter fontSize="28px" />}
           size="md"
           color="oxfordBlue.500"
           variant="ghost"
           _hover={{ color: 'turquoise.500', bg: 'oxfordBlue.500' }}
         />
       </Link>
     </Flex>
     <Text align="center" mt={0} mb={2} color="oxfordBlue.500">
       © {new Date().getFullYear()} Rene Malingre
     </Text>
   </Flex>
 );

};

export default Footer;
