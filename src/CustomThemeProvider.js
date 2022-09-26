import { createTheme, ThemeProvider } from '@mui/material';

const TEAL_COLOR = '#17637B';

const theme = createTheme({
  palette: {
    primary: {
      main: TEAL_COLOR,
    },
  },
});

function CustomThemeProvider(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
