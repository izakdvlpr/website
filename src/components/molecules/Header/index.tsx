import { Box, Flex, Heading } from '@chakra-ui/react';

import { Navigation } from './Navigation';
import { SocialMidia } from './SocialMidia';

export function Header(): JSX.Element {
  return (
    <Box borderBottomWidth="1px">
      <Flex
        w="100%"
        h={20}
        maxW={1240}
        px={{ base: 10, md: 48 }}
        m="0 auto"
        align="center"
        justify="space-between"
      >
        <SocialMidia />

        <Heading fontSize={{ base: 'md', md: 'xl' }} fontWeight="700">
          izakdvlpr
        </Heading>

        <Navigation />
      </Flex>
    </Box>
  );
}
