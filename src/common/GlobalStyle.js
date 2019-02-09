import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300i,400,500,600,700');
    font-family: 'Montserrat', Arial, sans-serif;
    -webkit-text-size-adjust: none;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
