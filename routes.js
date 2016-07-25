import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import HelpPage from './components/help/HelpPage';
import LoginPage from './components/users/LoginPage.js';
import HelpForm from './components/common/help/HelpForm.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="help" component={HelpPage} />
    <Route path="login" component={LoginPage} />
    <Route path="help/new" component={HelpForm} />
  </Route>
);
