import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  modal: {
    width: '80%',
    maxWidth: 'none',
  },
  textarea: {
    width: '100%',
  },
};

const HelpDescriptionModal = (props) =>
  <Dialog
    title="Add description"
    open={props.descriptionModalIsOpened}
    contentStyle={styles.modal}
    actions={[
      <FlatButton
        key="cancelButton"
        label="Cancel"
        primary
        onTouchTap={props.cancelDescriptionModalAction}
      />,
      <FlatButton
        key="saveButton"
        label="Save"
        primary
        onTouchTap={props.hideDescriptionModalAction}
      />,
    ]}>
    <TextField
      id="descriptionTextField"
      multiLine
      style={styles.textarea}
      inputStyle={styles.textarea}
      {...props.description}
    />
  </Dialog>;

HelpDescriptionModal.propTypes = {
  descriptionModalIsOpened: PropTypes.bool.isRequired,
  hideDescriptionModalAction: PropTypes.func.isRequired,
  cancelDescriptionModalAction: PropTypes.func.isRequired,
  description: PropTypes.object.isRequired,
};

export default HelpDescriptionModal;
