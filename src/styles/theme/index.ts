import { extendTheme } from '@chakra-ui/react';

import { config } from './config';
import { fonts } from './fonts';
import { styles } from './styles';

export const theme = extendTheme({
  config,
  fonts,
  styles,
});
