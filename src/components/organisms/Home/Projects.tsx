import {
  Box,
  Flex,
  Heading,
  Grid,
  Image,
  Link,
  Icon,
  Badge,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FaGithub, FaGooglePlay, FaLink } from 'react-icons/fa';

import { projects } from '@data/projects';

export function Projects(): JSX.Element {
  const { t } = useTranslation('projects');

  const theme = {
    lineColor: useColorModeValue('black', 'white'),
    badgeColor: useColorModeValue('blackAlpha', 'white'),
    descriptionColor: useColorModeValue('gray.600', 'gray.400'),
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
          {t('title')}
        </Heading>

        <Grid
          mt={10}
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap="2rem"
        >
          {projects.map(({ title, prefix, image, techs, links }) => (
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
                <Flex align="center" gap={2}>
                  <Heading
                    fontWeight="600"
                    as="h4"
                    size="md"
                    lineHeight="tight"
                    isTruncated
                  >
                    {title}
                  </Heading>

                  {links && links.github && (
                    <Link href={links.github} isExternal>
                      <Icon as={FaGithub} />
                    </Link>
                  )}

                  {links && links.site && (
                    <Link href={links.site} isExternal>
                      <Icon as={FaLink} />
                    </Link>
                  )}

                  {links && links.playstore && (
                    <Link href={links.playstore} isExternal>
                      <Icon as={FaGooglePlay} />
                    </Link>
                  )}
                </Flex>

                <Flex maxW="100px" alignItems="baseline" gap={2}>
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
                  color={theme.descriptionColor}
                  lineHeight="5"
                >
                  {t(`description.${prefix}`)}
                </Text>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
