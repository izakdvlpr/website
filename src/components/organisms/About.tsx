import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export function About(): JSX.Element {
  const { t } = useTranslation('about');

  const theme = {
    lineColor: useColorModeValue('black', 'white'),
  };

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
              backgroundColor: theme.lineColor,
            },
          }}
        >
          {t('title')}
        </Heading>

        <Text
          as="p"
          fontFamily="Poppins"
          textAlign="justify"
          dangerouslySetInnerHTML={{
            __html: t('blocks.one'),
          }}
        />

        <Text
          as="p"
          fontFamily="Poppins"
          textAlign="justify"
          dangerouslySetInnerHTML={{
            __html: t('blocks.two'),
          }}
        />
      </Flex>
    </Box>
  );
}
