import type { Styles } from '@chakra-ui/theme-tools';

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
