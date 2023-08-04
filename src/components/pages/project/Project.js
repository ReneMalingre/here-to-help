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
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import Badge from '../../badge/Badge';

// sub-component of Portfolio.js
const ProjectImage = ({ screenshot, githubLink }) => {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');

  return (
    <Box
      flex={isNotSmallScreen ? 3 : 1}
      position="relative"
      mb={!isNotSmallScreen && '1rem'}
      mx={isNotSmallScreen ? '1rem' : '0rem'}
    >
      <Image
        src={screenshot}
        alt="screenshot"
        boxSize="100%"
        borderRadius="md"
        shadow="xl"
      />
      {githubLink ? (
        <Link href={githubLink} isExternal>
          <Icon
            as={FaGithub}
            color="turquoise.500"
            w={10}
            h={10}
            position="absolute"
            bottom="5"
            right="5"
            _hover={{ color: 'turquoise.600' }}
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
  screenshot,
  githubLink,
  markerComment,
  flip,
}) => {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');

  const info = (
    <VStack align="start" spacing={3} flex={isNotSmallScreen ? 2 : 1}>
      <Text fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <Text>{description}</Text>
      {markerComment ? (
        <Text px={2} fontSize="sm" fontStyle="italic" textColor="turquoise.500">
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
            bgColour="coolGray.500"
            textColour="oxfordBlue.500"
          />
        ))}
      </Flex>
      {link ? (
        <Link href={link} color="turquoise.500" isExternal pl={2}>
          Visit Live Project
        </Link>
      ) : (
        <Text color="gray.500" fontStyle="italic" pl={2}>
          App not deployed
        </Text>
      )}
      {githubLink ? (
        <Link href={githubLink} color="turquoise.500" isExternal pl={2}>
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
    <ProjectImage screenshot={screenshot} githubLink={githubLink} />
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
