import React from 'react';
import {
  Box,
  VStack,
  Image,
  Text,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';

const AboutMe = ({ name, imageUrl, aboutText }) => {
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

        {aboutText.map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default AboutMe;
