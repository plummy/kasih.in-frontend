import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import LoginPageForm from './presentation/LoginPage.js';

const fields = ['username', 'password', 'rememberMe'];

const validate = (values) => {
  const errors = {};
  const isEmpty = (value) => 
    value === undefined || value === null || value === '';

  if (isEmpty(values.username)) {
    errors.username = 'Username is required';
  }
  if (isEmpty(values.password)) {
    errors.password = 'Password is required';
  }
  return errors;
};

const LoginPage = reduxForm({
  form: 'login',
  fields,
  validate,
})(LoginPageForm);

export default LoginPage;
