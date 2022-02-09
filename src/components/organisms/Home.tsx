import { Flex } from '@chakra-ui/react';

import { Header } from '@components/molecules/Header';
import { Hero } from '@components/molecules/Hero';

export function Home(): JSX.Element {
  return (
    <Flex flexDir="column">
      <Header />

      <Hero />
    </Flex>
  );
}
