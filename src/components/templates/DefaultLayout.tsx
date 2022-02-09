import { Flex } from '@chakra-ui/react';

import { SEO } from '@components/atoms/SEO';
import { TPropsWithChildren } from '@interfaces/react';

export function DefaultLayout({ children }: TPropsWithChildren): JSX.Element {
  return (
    <>
      <SEO />

      <Flex as="main" flexDir="column">
        {children}
      </Flex>
    </>
  );
}
