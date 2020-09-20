import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
  }
}
