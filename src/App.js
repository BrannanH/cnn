import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomeBar from './main/js/home/HomeBar.js';
import BasePage from './main/js/home/BasePage.js';

const theme = createMuiTheme();

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HomeBar />
      <BasePage />
    </MuiThemeProvider>
  );
}
