import {
  Box,
  Flex,
  Heading,
  Grid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { languages, frameworks } from '@data/skills';

export function Skills(): JSX.Element {
  const theme = {
    lineColor: useColorModeValue('black', 'white'),
  };

  return (
    <Box id="skills" borderBottomWidth="1px">
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
          Hard Skils
        </Heading>

        <Grid
          mt={10}
          templateColumns="repeat(auto-fit, minmax(100px, 1fr))"
          gap="2rem"
        >
          {languages.map(({ name, icon: Icon }) => (
            <Flex key={name} flexDir="column" align="center" gap={2}>
              <Icon size="5rem" />

              <Text>{name}</Text>
            </Flex>
          ))}

          {frameworks.map(({ name, icon: Icon }) => (
            <Flex key={name} flexDir="column" align="center" gap={2}>
              <Icon size="5rem" />

              <Text>{name}</Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
