import {
  Box,
  Flex,
  Heading,
  Grid,
  Image,
  VStack,
  Badge,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { projects } from '@data/projects';

export function Projects(): JSX.Element {
  const theme = {
    lineColor: useColorModeValue('black', 'white'),
    badgeColor: useColorModeValue('blackAlpha', 'white'),
  };

  return (
    <Box id="projects" borderBottomWidth="1px">
      <Flex
        w="100%"
        maxW={1240}
        px={{ base: 10, md: 48 }}
        m="6rem auto"
        flexDir="column"
      >
        <Heading
          as="h3"
          size="lg"
          position="relative"
          sx={{
            '&:after': {
              width: '80px',
              height: '4px',
              marginRight: '1rem',
              position: 'absolute',
              content: '""',
              bottom: '-10px',
              display: 'block',
              backgroundColor: theme.lineColor,
            },
          }}
        >
          Projetos
        </Heading>

        <Grid
          mt={10}
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap="2rem"
        >
          {projects.map(({ title, description, image, techs, links }) => (
            <Box
              key={title}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={image}
                alt={title}
                w="100%"
                h={150}
                objectFit="cover"
                objectPosition="100% 0%"
              />

              <Flex p={6} flexDir="column" gap={2}>
                <Heading
                  mt="1"
                  fontWeight="600"
                  as="h4"
                  size="md"
                  lineHeight="tight"
                  isTruncated
                >
                  {title}
                </Heading>

                <Flex gap={1}>
                  {techs.map(tech => (
                    <Badge
                      key={tech}
                      borderRadius="full"
                      px="2"
                      colorScheme="gray"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>

                <Text
                  as="p"
                  fontSize={12}
                  fontFamily="Poppins"
                  color="gray.600"
                  lineHeight="5"
                >
                  {description}
                </Text>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
