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
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { MouseEvent, useCallback } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Link } from '@components/atoms/Link';
import { navigation } from '@data/navigation';

export function Navigation(): JSX.Element {
  const router = useRouter();

  const { t } = useTranslation('common');

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

      return document.getElementById(path.replace('#', ''))?.scrollIntoView(); // eslint-disable-line consistent-return
    },
    [],
  );

  return (
    <HStack spacing={4}>
      {isTablet ? (
        <Menu placement="bottom-end">
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
                  {t(`navigation.${link.name}`)}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <HStack spacing={8}>
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
                    backgroundColor: theme.navLinkHoverLine,
                  },
                  '&:hover:after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  },
                }}
              >
                {t(`navigation.${link.name}`)}
              </Text>
            </Link>
          ))}
        </HStack>
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

      <Menu placement="bottom-end">
        <MenuButton
          as={IconButton}
          aria-label="Change Language"
          icon={
            router.locale === 'en' ? (
              <ReactCountryFlag countryCode="US" svg />
            ) : (
              <ReactCountryFlag countryCode="BR" svg />
            )
          }
          variant="outline"
        />

        <MenuList minW="150px" bgColor={theme.menuBgColor}>
          <Link href="/" locale="en">
            <MenuItem fontSize="xs" fontWeight={600}>
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{ fontSize: '1rem' }}
              />
              <Text pl="0.5rem">{t('english')}</Text>
            </MenuItem>
          </Link>
          <Link href="/" locale="pt">
            <MenuItem fontSize="xs" fontWeight={600}>
              <ReactCountryFlag
                countryCode="BR"
                svg
                style={{ fontSize: '1rem' }}
              />
              <Text pl="0.5rem">{t('portuguese')}</Text>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </HStack>
  );
}
