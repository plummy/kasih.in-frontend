/* TODO: Add more fields to save
 * 1. Address + Maps
 * 2. Photos
 * 3. Details
 * 
 */

import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';

export const fields = ['message'];

class HelpForm extends React.Component {
  render() {
    const {
      fields: { message },
      handleSubmit,
      resetForm,
      submitting,
    } = this.props;
    return (
      <div className="container">
        <h4 className="center">What can you help today?</h4>
        <form onSubmit={this.onClickPost}>
          <div>
            <TextField {...message} hintText="I want to help ..." />
          </div>
          <div>
            <RaisedButton
              type="submit"
              primary
              label="POST"
              icon={<FontIcon className="material-icons">send</FontIcon>} />
          </div>
        </form>
      </div>
    );
  }
}

HelpForm.propTypes = {
  actions: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'help',
  fields,
})(HelpForm);
