import { extendTheme } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';

export const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const fonts = {
  body: 'Fira Code',
  heading: 'Fira Code',
};

export const semanticTokens = {
  colors: {},
};

export const styles: Styles = {
  global: props => ({
    '*:focus': {
      boxShadow: 'none !important',
    },
    'html': {
      scrollBehavior: 'smooth',
    },
    'body': {
      color: props.colorMode === 'light' ? 'black' : 'white',
      bgColor: props.colorMode === 'light' ? 'white' : 'black',
    },
    'a': {
      _hover: {
        textDecoration: 'none',
      },
    },
  }),
};

export const theme = extendTheme({
  config,
  fonts,
  semanticTokens,
  styles,
});
