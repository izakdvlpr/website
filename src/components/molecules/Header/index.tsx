import { Box, Flex, Heading } from '@chakra-ui/react';

import { Link } from '@components/atoms/Link';

import { Navigation } from './Navigation';

export function Header(): JSX.Element {
  return (
    <Box
      w="100%"
      position="fixed"
      zIndex="overlay"
      borderBottomWidth="1px"
      backgroundColor="whiteAlpha.900"
    >
      <Flex
        w="100%"
        h={20}
        maxW={1240}
        px={{ base: 10, md: 48 }}
        m="0 auto"
        align="center"
        justify="space-between"
      >
        <Link href="/">
          <Heading fontSize={{ base: 'md', md: 'xl' }} fontWeight="700">
            izakdvlpr
          </Heading>
        </Link>

        <Navigation />
      </Flex>
    </Box>
  );
}
