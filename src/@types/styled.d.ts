import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      background: string;

      white: string;
      black: string;
    };
  }
}
