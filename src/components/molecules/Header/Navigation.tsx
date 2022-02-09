import { HStack, Text } from '@chakra-ui/react';
import { MouseEvent, useCallback } from 'react';

import { Link } from '@components/atoms/Link';
import { navigation } from '@data/navigation';

export function Navigation(): JSX.Element {
  const handleNextSection = useCallback(
    (path: string, event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
      if (!path.startsWith('#')) return;

      event.preventDefault();

      // eslint-disable-next-line consistent-return
      return document.getElementById(path.replace('#', ''))?.scrollIntoView();
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
          <Text
            position="relative"
            fontSize={{ base: 'xs', md: 'md' }}
            fontWeight={600}
            sx={{
              '&:after': {
                width: '100%',
                height: '2px',
                position: 'absolute',
                content: '""',
                bottom: '-8px',
                left: '0',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.25s ease-out',
                backgroundColor: 'black',
              },
              '&:hover:after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            }}
          >
            {link.name}
          </Text>
        </Link>
      ))}
    </HStack>
  );
}
