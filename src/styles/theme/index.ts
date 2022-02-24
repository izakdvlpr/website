import { extendTheme } from '@chakra-ui/react';

import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';
import { semanticTokens } from './semanticTokens';
import { styles } from './styles';

export const theme = extendTheme({
  config,
  semanticTokens,
  fonts,
  styles,
  components,
});
