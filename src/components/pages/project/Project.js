import React from 'react';
import {
  Box,
  VStack,
  Text,
  Image,
  Link,
  useMediaQuery,
  Icon,
  Flex,
  AspectRatio,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import Badge from '../../badge/Badge';

// sub-component of Portfolio.js
const ProjectImage = ({ screenshot, aspectRatio, githubLink }) => {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 800px)');

  return (
    <Box
      flex={isNotSmallScreen ? 3 : 1}
      position="relative"
      mb={!isNotSmallScreen && '1rem'}
      mx={isNotSmallScreen ? '1rem' : '0rem'}
      mt={isNotSmallScreen ? '2.5rem' : '1rem'}
    >
      <AspectRatio ratio={aspectRatio} borderRadius="md" shadow="xl">
        <Image
          src={screenshot}
          alt="screenshot"
          boxSize="100%"
          borderRadius="md"
          shadow="xl"
        />
      </AspectRatio>
      {githubLink ? (
        <Link href={githubLink} isExternal>
          <Icon
            as={FaGithub}
            color="deepCyan.500"
            w={10}
            h={10}
            position="absolute"
            bottom="5"
            right="5"
            _hover={{ color: 'deepCyan.600' }}
          />
        </Link>
      ) : (
        <></>
      )}
    </Box>
  );
};

const Project = ({
  title,
  description,
  technology,
  link,
  aspectRatio,
  screenshot,
  githubLink,
  markerComment,
  flip,
}) => {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 800px)');

  const info = (
    <VStack align="start" spacing={3} flex={isNotSmallScreen ? 2 : 1}>
      <Text fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <Text>{description}</Text>
      {markerComment ? (
        <Text px={2} fontSize="sm" fontStyle="italic" textColor="deepCyan.500">
          Grade: {markerComment}
        </Text>
      ) : (
        <></>
      )}

      <Flex wrap="wrap">
        {technology.map((tech, index) => (
          <Badge
            key={index}
            title={tech}
            bgColour="mutedCyan.500"
            textColour="spaceGray.500"
          />
        ))}
      </Flex>
      {link ? (
        <Link href={link} color="deepCyan.500" isExternal pl={2}>
          Visit Live Project
        </Link>
      ) : (
        <Text color="gray.500" fontStyle="italic" pl={2}>
          App not deployed
        </Text>
      )}
      {githubLink ? (
        <Link href={githubLink} color="deepCyan.500" isExternal pl={2}>
          Visit GitHub Repository
        </Link>
      ) : (
        <Text color="gray.500" fontStyle="italic" pl={2}>
          Repository is private
        </Text>
      )}
    </VStack>
  );

  const image = (
    <ProjectImage
      screenshot={screenshot}
      aspectRatio={aspectRatio}
      githubLink={githubLink}
    />
  );

  return (
    <Box
      display="flex"
      flexDirection={
        isNotSmallScreen ? (flip ? 'row-reverse' : 'row') : 'column'
      }
      mb="2rem"
    >
      {info}
      {image}
    </Box>
  );
};

export default Project;
