import React from 'react';
import {
  Box,
  VStack,
  Image,
  Text,
  Heading,
  useMediaQuery,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { FaLocationArrow } from 'react-icons/fa';
const AboutMe = ({ name, imageUrl, aboutText, tagLine }) => {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');

  return (
    <Box
      display="flex"
      flexDirection={isNotSmallScreen ? 'row' : 'column'}
      spacing={5}
      alignItems={isNotSmallScreen ? 'center' : ''}
    >
      <Box
        flex="1"
        textAlign={isNotSmallScreen ? 'center' : 'left'}
        mb={isNotSmallScreen ? '0' : '1rem'}
      >
        <Image
          src={imageUrl}
          alt={name}
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
          border="2px"
          borderColor="gray.200"
          mx="auto"
        />
        <Text fontSize="2xl" fontWeight="bold" mt="1rem" textAlign="center">
          {name}
        </Text>
      </Box>
      <VStack flex="2" align={isNotSmallScreen ? 'start' : 'center'}>
        <Heading size="lg">About Me</Heading>
        <Text
          fontSize="xl"
          fontWeight="bold"
          textAlign="center"
          textColor="turquoise.500"
        >
          {tagLine}
        </Text>
        {aboutText.map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
        <Link
          href="https://www.google.com/maps/place/Adelaide+SA,+Australia"
          isExternal
          mx={5}
        >
          <IconButton
            aria-label="Github Profile"
            icon={<FaLocationArrow fontSize="1.25rem" />}
            size="md"
            color="turquoise.500"
            variant="ghost"
            _hover={{ color: 'oxfordBlue.500', bg: 'turquoise.500' }}
          />Adelaide, South Australia
        </Link>
      </VStack>
    </Box>
  );
};

export default AboutMe;
