import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 608px;
    --white: #FFFFFF;
    --lightGrey: #BDBDBD;
    --medGrey: #828282;
    --black: #333333;
    --blue: #2F80ED;
    --fontSuperBig: 2.25rem;
    --fontBig: 1.125rem;
    --fontMed: 0.875rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    max-width: 608px;
    margin: 0 auto;
    padding: 0;
  }
`;
