import { createMuiTheme } from '@material-ui/core/styles';

import palette from 'common/palette';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.blue,
      dark: palette.blue,
    },
    background: {
      default: palette.white,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Montserrat, Arial, sans-serif',
  },
});

export default theme;
