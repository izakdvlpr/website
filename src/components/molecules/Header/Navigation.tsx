import { HStack, Text } from '@chakra-ui/react';

import { Link } from '@components/atoms/Link';
import { navigation } from '@data/navigation';

export function Navigation(): JSX.Element {
  return (
    <HStack spacing={{ base: 4, md: 8 }}>
      {navigation.map(link => (
        <Link key={link.name} href={link.href}>
          <Text fontSize={{ base: 'xs', md: 'md' }} fontWeight={900}>
            {link.name}
          </Text>
        </Link>
      ))}
    </HStack>
  );
}
