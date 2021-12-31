import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { fonts } from './fonts';
import { styles } from './styles';

const overrides = {
  colors,
  fonts,
  styles,
  components,
};

export const chakraTheme = extendTheme(overrides);
