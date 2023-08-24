import React from 'react';
import Project from './project/Project';
import {
  Box,
  useMediaQuery,
  VStack,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/react';
import projects from '../../utils/data/projects';

function Portfolio() {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');

  return (
    <VStack align={isNotSmallScreen ? 'start' : 'center'}>
      <Box w="100%">
        <Heading size="lg" mb={2}>
          My Portfolio
        </Heading>
        <Text mb={4} mx={2} color="deepCyan.500">
          Here are some of my recent projects. Most are assignments or projects
          for the University of Adelaide's Full-stack Coding Boot Camp, February
          to September 2023, and where true, the mark and some commentary from
          the Boot Camp grading is given. Where applicable you can navigate to
          the GitHub repository and the live application.
        </Text>
        <Box p={4}>
          {projects.map((project, index) => (
            <div key={index}>
              <Project
                key={index}
                title={project.title}
                description={project.description}
                technology={project.technology}
                link={project.link}
                githubLink={project.githubLink}
                screenshot={project.screenshot}
                aspectRatio={project.aspectRatio}
                markerComment={project.markerComment}
                flip={index % 2 !== 0}
              />
              {index !== projects.length - 1 && (
                <Divider my="8" borderColor="deepCyan.500" />
              )}
            </div>
          ))}
        </Box>
      </Box>
    </VStack>
  );
}

export default Portfolio;
