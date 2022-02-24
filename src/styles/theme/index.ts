import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';
import { styles } from './styles';

const overrides = {
  config,
  colors,
  fonts,
  styles,
  components,
};

export const theme = extendTheme(overrides);
