import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      light: string;
      dark: string;
      google: string;
      headerLine: string;

      background: string;
      text: string;
      inputBorder: string;
      lightText: string;

      bgQuestion: string;
      bgHighlighted: string;
      bgAnswered: string;
      questionText: string;
    }
  }
}