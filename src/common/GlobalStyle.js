import { createGlobalStyle } from 'styled-components';
import palette from 'common/palette';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300i,400,500,600,700');
    font-family: 'Montserrat', Arial, sans-serif;
    -webkit-text-size-adjust: none;
    color: ${palette.darkGrey};
  }

  button {
    font-family: inherit;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
