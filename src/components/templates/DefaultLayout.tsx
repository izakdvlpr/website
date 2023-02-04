import { Flex } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

import { SEO } from '@/components/atoms/SEO';
import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';

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
