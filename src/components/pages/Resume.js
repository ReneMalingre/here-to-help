import React from 'react';
import {
  Box,
  VStack,
  Heading,
  useMediaQuery,
  Text,
  Link,
  List,
  ListItem,
  Flex,
} from '@chakra-ui/react';
import Badge from '../badge/Badge';
import technologies from '../../utils/data/resume';

function Resume() {
  const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');
  return (
    <VStack align={isNotSmallScreen ? 'start' : 'center'}>
      <Box w="100%">
        <Heading as="h1" size="lg" mb={2}>
          Résumé
        </Heading>
        <VStack align="start" spacing={3}>
          <Heading as="h2" size="md" color="turquoise.500">
            Rene Malingre
          </Heading>
          <Heading as="h3" size="md" color="turquoise.500" fontStyle="italic">
            Full-Stack Web Developer
          </Heading>
          <Flex wrap="wrap" px={isNotSmallScreen ? 12 : 5}>
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                title={tech}
                bgColour="coolGray.500"
                textColour="oxfordBlue.500"
              />
            ))}
          </Flex>
          <Heading as="h2" size="md">
            Contact Details
          </Heading>
          <VStack align="start" spacing={0} ml={5}>
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
          <Heading as="h2" size="md">
            Objective
          </Heading>
          <Text px={5}>
            I am looking for opportunities to use my coding skills, experience
            and leadership experience to add value to businesses through digital
            platforms, as an employee or as a freelance worker.
          </Text>
          <Heading as="h2" size="md">
            Professional Experience
          </Heading>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="sm">
              Owner & Optometrist, Adelaide Eye Care (2003 - Present)
            </Heading>
            <Text px={5}>
              Managed and operated three successful optometry practices for 20
              years, providing exceptional patient care and customer service.
              Specialized in fitting rigid and scleral contact lenses, myopia
              management, and handling patients with complicated spectacle
              prescriptions. I've consistently maintained high patient
              satisfaction ratings and implemented innovative strategies to grow
              and expand the practices.
              <br />
              Developed the Point-of-Sale system and Clinical Records system for
              the practices, including integration with Xero accounting
              software, and Cliniko online booking system. The system is used
              daily by all staff and has been a key factor in the success of the
              practices.
              <br />
            </Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="sm">
              Co-Owner, Alleve Eye Clinic (2016 - Present)
            </Heading>
            <Text px={5}>
              I'm proud to have been involved in opening South Australia's first
              dedicated dry eye clinic, Alleve Eye Clinic, offering advanced
              diagnostics and treatment options for sufferers of dry eye and
              related ocular surface disease.
            </Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="sm">
              Professional Services Manager, OPSM SA, NT & TAS (2000 - 2002)
            </Heading>
            <Text px={5}>
              Responsible for hiring, scheduling, performance management, and
              training of all optometrists in the region. I also provided
              clinical support to optometrists in the region, and was
              responsible for the development of clinical protocols and
              procedures.
              <br />I was also responsible for the development and
              implementation of a staff rostering system, which was adopted by
              OPSM nationally.
            </Text>
          </VStack>
          <Heading as="h2" size="md">
            Education
          </Heading>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="sm">
              Full-Stack Web Development Bootcamp, The University of Adelaide
              via edX (March, 2023 - September, 2023)
            </Heading>
            <Text px={5}>
              Currently enrolled in an intensive full-stack web development
              bootcamp, learning key programming languages and frameworks, such
              as HTML, CSS, JavaScript, MySQL, MongoDB, React, and Node.js.
            </Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="sm">
              PhD Candidate, Queensland University of Technology (1993 - 1997)
            </Heading>
            <Text px={5}>
              An unfinished thesis on the topic of "Environmental Factors in the
              Development of Late-Onset Myopia".
            </Text>
          </VStack>
          <VStack align="start" spacing={3}>
            <Heading as="h3" size="sm">
              Bachelor of Applied Science (Optometry)(Hons), Queensland
              University of Technology (1986 - 1990)
            </Heading>
            <Text px={5}>
              Graduated with First Class Honours in 1990. I was awarded a University Medal
              for Academic Excellence.
            </Text>
          </VStack>
          <Heading as="h2" size="md">
            Skills
          </Heading>
          <List styleType="disc" px={8}>
            <ListItem>
              Software Development: Experience in VB.NET, C#, JavaScript, HTML,
              CSS, MySQL, Node.js, React, MongoDB, etc.
            </ListItem>
            <ListItem>
              Leadership: Managing and operating three successful optometry
              practices for 20 years, providing exceptional patient care and
              customer service. Currently managing a team of 10 optometrists and
              10 retail staff.
            </ListItem>
            <ListItem>
              Optometry: 30 years of experience. Expertise in fitting rigid and scleral contact lenses,
              myopia management, and managing patients with complicated
              spectacle prescriptions.
            </ListItem>
          </List>
          <Heading as="h2" size="md">
            Professional Memberships
          </Heading>
          <List styleType="disc" px={8}>
            <ListItem>Optometry Australia, Member, 1990 - Present</ListItem>
          </List>
          <Heading as="h2" size="md">
            References
          </Heading>
          <Text px={5}>Available upon request</Text>
        </VStack>
      </Box>
    </VStack>
  );
}
export default Resume;
