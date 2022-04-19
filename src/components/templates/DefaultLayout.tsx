import { Flex } from '@chakra-ui/react';

import { SEO } from '@components/atoms/SEO';
import { Footer } from '@components/molecules/Footer';
import { Header } from '@components/molecules/Header';
import type { PropsWithChildren } from '@interfaces/react';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <SEO />

      <Flex as="main" flexDir="column">
        <Header />

        {children}

        <Footer />
      </Flex>
    </>
  );
}
