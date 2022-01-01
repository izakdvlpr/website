import { HStack } from '@chakra-ui/react';

import { Link } from '@components/atoms/Link';

export function Navigation(): JSX.Element {
  return (
    <HStack spacing={3}>
      <Link href="/">About</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Contact</Link>
    </HStack>
  );
}
