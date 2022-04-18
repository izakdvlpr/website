import { Flex } from '@chakra-ui/react';

import { SEO } from '@components/atoms/SEO';
import type { PropsWithChildren } from '@interfaces/react';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <SEO />

      <Flex as="main" flexDir="column">
        {children}
      </Flex>
    </>
  );
}
