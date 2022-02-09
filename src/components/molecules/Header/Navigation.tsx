/* eslint-disable consistent-return */

import { HStack, Text } from '@chakra-ui/react';
import { MouseEvent, useCallback } from 'react';

import { Link } from '@components/atoms/Link';
import { navigation } from '@data/navigation';

export function Navigation(): JSX.Element {
  const handleNextSection = useCallback(
    (path: string, event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
      if (!path.startsWith('#')) return;

      event.preventDefault();

      return document.getElementById(path.split('#')[0])?.scrollIntoView();
    },
    [],
  );

  return (
    <HStack spacing={{ base: 4, md: 8 }}>
      {navigation.map(link => (
        <Link
          key={link.name}
          href={link.href}
          aria-label="next section"
          onClick={event => handleNextSection(link.href, event)}
        >
          <Text fontSize={{ base: 'xs', md: 'md' }} fontWeight={900}>
            {link.name}
          </Text>
        </Link>
      ))}
    </HStack>
  );
}
