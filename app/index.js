import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Routes from './Routes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { black, darkWhite } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: black,
    paddingTop: 0,
  },
  appBar: {
    height: 70,
    color: darkWhite,
  },
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routes store={store} />
  </MuiThemeProvider>,
  document.getElementById('app')
);
