import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import LoginPageForm from './presentation/LoginPage.js';

const fields = ['username', 'password', 'rememberMe'];

const LoginPage = reduxForm({
  form: 'login',
  fields,
})(LoginPageForm);

export default LoginPage;
