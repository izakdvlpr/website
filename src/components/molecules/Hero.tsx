import { Flex, Heading, Text } from '@chakra-ui/react';

export function Hero(): JSX.Element {
  return (
    <Flex
      w="100%"
      height="calc(100vh - 90px)"
      maxW={1240}
      px={{ base: 10, md: 48 }}
      m="0 auto"
      flexDir="column"
      justify="center"
      gap={6}
    >
      <Heading fontSize={{ base: '4xl', md: '6xl' }}>
        Hey, i&apos;m Izak.
      </Heading>

      <Text
        maxW={650}
        fontSize={{ base: 'sm', md: 'lg' }}
        fontFamily="Poppins"
        fontWeight={400}
        textAlign="justify"
        textJustify="inter-word"
      >
        I was interested in the software development area at the age of 15 with
        the Javascript language, over time I fell in love with the language.
        Today I develop with Node Js, React Js, and React Native.
      </Text>
    </Flex>
  );
}
