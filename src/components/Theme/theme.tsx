import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { FC } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontSize: 18,
  },
});

const Theme: FC = ({ children }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
