import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import { loginSubmit } from '../../../actions/userActions';

const submit = (values, dispatch) => 
  new Promise((resolve, reject) => {
    dispatch(loginSubmit({ values, resolve, reject }));
  });

class LoginPage extends React.Component {
  render() {
    const { 
      fields: { 
        username, 
        password, 
        rememberMe, 
      }, 
      submitting,
      resetForm,
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(submit.bind(this))}>
        <div>
          <TextField
            id="username" 
            hintText="Username"
            errorText={username.touched && username.error} 
            {...username} />
        </div>
        <div>
          <TextField
            id="password"
            type="password"
            hintText="Password"
            errorText={password.touched && password.error} 
            {...password} />
        </div>
        <div>
          <Checkbox 
            id="remember-me"
            label="Remember me?"
            {...rememberMe} />
        </div>
        <br />
        <div>
          <a id="forget-password" href="#">Forget your password?</a>
        </div>
        <br />
        <div>
          <a id="sign-up" href="#">Don't have account?</a>
        </div>
        <br />
        <div>
          {this.props.submitting ? <CircularProgress size={0.5} /> : 
            <FlatButton  
              primary 
              label="Login"
              type="submit" />}
        </div>
      </form>
    );
  }
}

LoginPage.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default LoginPage;
