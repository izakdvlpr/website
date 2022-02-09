import {
  Flex,
  Heading,
  Text,
  HStack,
  Link,
  IconButton,
} from '@chakra-ui/react';

import { socialMedia } from '@data/social';

export function Home(): JSX.Element {
  return (
    <Flex
      w="100%"
      height="calc(100vh - 90px)"
      maxW={1240}
      px={{ base: 10, md: 48 }}
      m="0 auto"
      flexDir="column"
      justify="center"
      gap={4}
    >
      <Heading
        fontSize={{ base: '4xl', md: '6xl' }}
        textTransform="uppercase"
        letterSpacing="shorter"
      >
        Hey, i&apos;m Izak.
      </Heading>

      <Text
        maxW={650}
        fontSize={{ base: 'sm', md: 'lg' }}
        fontFamily="Poppins"
        fontWeight={400}
        textAlign="justify"
      >
        I was interested in the software development area at the age of 15 with
        the Javascript language, over time I fell in love with the language.
        Today I develop with Node Js, React Js, and React Native.
      </Text>

      <Text
        fontSize={{ base: 'sm', md: 'lg' }}
        fontFamily="Poppins"
        fontWeight={400}
      >
        Let&apos;s stay in touch!
      </Text>

      <HStack spacing={4}>
        {socialMedia.map(({ name, link, icon: Icon }) => (
          <Link key={name} href={link} isExternal>
            <IconButton
              aria-label={name}
              isRound
              icon={<Icon color="white" />}
              backgroundColor="black"
              _hover={{}}
            />
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}
