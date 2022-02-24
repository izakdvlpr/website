import {
  HStack,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { MouseEvent, useCallback } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Link } from '@components/atoms/Link';
import { navigation } from '@data/navigation';

export function Navigation(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isTablet] = useMediaQuery('(max-width: 875px)');

  const theme = {
    menuBgColor: useColorModeValue('white', 'black'),
    navLinkHoverLine: useColorModeValue('black', 'white'),
    icon: useColorModeValue('black', 'white'),
  };

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
    <HStack spacing={isTablet ? 4 : 8}>
      {isTablet ? (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="outline"
          />

          <MenuList minW="150px" bgColor={theme.menuBgColor}>
            {navigation.map(link => (
              <Link
                key={link.name}
                href={link.href}
                aria-label="next section"
                onClick={event => handleNextSection(link.href, event)}
              >
                <MenuItem fontSize="xs" fontWeight={600}>
                  {link.name}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      ) : (
        navigation.map(link => (
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
                  backgroundColor: theme.navLinkHoverLine,
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
        ))
      )}

      <IconButton
        aria-label="Color Mode"
        icon={
          colorMode === 'light' ? (
            <FaMoon color={theme.icon} />
          ) : (
            <FaSun color={theme.icon} />
          )
        }
        onClick={toggleColorMode}
        variant="outline"
      />
    </HStack>
  );
}
