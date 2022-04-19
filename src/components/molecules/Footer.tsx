import { Flex, HStack, Link, IconButton } from '@chakra-ui/react';

import { socialMedia } from '@data/social';

export function Footer(): JSX.Element {
  return (
    <Flex
      w="100%"
      h={20}
      maxW={1240}
      px={{ base: 10, md: 48 }}
      m="0 auto"
      align="center"
      justify="flex-end"
    >
      <HStack spacing={4}>
        {socialMedia.map(({ name, link, icon: Icon }) => (
          <Link key={name} href={link} isExternal>
            <IconButton
              aria-label={name}
              isRound
              icon={<Icon />}
              variant="solid"
            />
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}
