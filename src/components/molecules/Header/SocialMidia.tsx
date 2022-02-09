import { HStack, Icon, Link } from '@chakra-ui/react';

import { socialMedia } from '@data/social';

export function SocialMidia(): JSX.Element {
  return (
    <HStack spacing={8} display={{ base: 'none', lg: 'unset' }}>
      {socialMedia.map(data => (
        <Link key={data.name} href={data.link} isExternal>
          <Icon as={data.icon} w={5} h={5} color="black" />
        </Link>
      ))}
    </HStack>
  );
}
