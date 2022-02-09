import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export function About(): JSX.Element {
  return (
    <Box id="about" borderBottomWidth="1px">
      <Flex
        w="100%"
        maxW={1240}
        px={{ base: 10, md: 48 }}
        m="6rem auto"
        flexDir="column"
        gap={8}
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
              backgroundColor: 'black',
            },
          }}
        >
          Quem sou
        </Heading>

        <Text as="p" fontFamily="Poppins" textAlign="justify">
          Prazer Isaque, 18, mas pode me chamar de Izak (meu apelido). Me
          interessei pela área de{' '}
          <Text as="i">Desenvolvimento de Software</Text> aos 15 anos com a
          linguagem Javascript. Comecei programando{' '}
          <Text as="strong">bots para Discord</Text>, mais eu sempre admirei
          projetos na Web e principalmente no Mobile.
        </Text>

        <Text as="p" fontFamily="Poppins" textAlign="justify">
          Com o passar do tempo eu conheci a Rocketseat, foi quando me apaixonei
          por JavaScript e conheci as melhores tecnologias, Node.js, React.js,
          React Native e todo o ecossistema por volta dessas tecnologias às
          quais eu trabalho hoje.
        </Text>
      </Flex>
    </Box>
  );
}
