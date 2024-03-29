import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Link,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { socialMedia } from '@/data/social';

export function Main(): JSX.Element {
  const { t } = useTranslation('main');

  return (
    <Box borderBottomWidth="1px">
      <Flex
        w="100%"
        maxW={1240}
        px={{ base: 10, md: 48 }}
        m="15rem auto 10rem auto"
        justify="space-between"
      >
        <Flex flexDir="column" justify="center" gap={4}>
          <Heading
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            textTransform="uppercase"
            letterSpacing="shorter"
          >
            {t('title')}
          </Heading>

          <Text
            maxW={400}
            fontSize={{ base: 'sm', md: 'lg' }}
            fontFamily="Poppins"
            fontWeight={400}
            textAlign="justify"
          >
            {t('biography')}
          </Text>

          <HStack spacing={4}>
            {socialMedia.map(({ name, link, icon: Icon }) => (
              <Link key={name} href={link} isExternal>
                <IconButton
                  aria-label={name}
                  isRound
                  icon={<Icon />}
                  variant="solid"
                />
              </Link>
            ))}
          </HStack>
        </Flex>

        <Image
          src="/images/profile.jpeg"
          alt="Izak"
          display={{ base: 'none', lg: 'unset' }}
          borderRadius="full"
          boxSize="200px"
        />
      </Flex>
    </Box>
  );
}
