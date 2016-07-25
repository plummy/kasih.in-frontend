/* TODO: Add more fields to save
 * 1. Address + Maps
 * 2. Photos
 *
 */

import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SubjectIcon from 'material-ui/svg-icons/action/subject';
import AddLocationIcon from 'material-ui/svg-icons/maps/add-location';
import EditLocationIcon from 'material-ui/svg-icons/maps/edit-location';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, getValues, change } from 'redux-form';
import HelpDescriptionModal from './HelpDescriptionModal';
import HelpLocationModal from './HelpLocationModal';
import isEmpty from 'lodash/isEmpty';
import { cyan500 } from 'material-ui/styles/colors';
import {
  cancelDescriptionModal,
  centerChanged,
  discardLocation,
  helpSubmit,
  hideDescriptionModal,
  hideLocationModal,
  markerChanged,
  saveLocation,
  showDescriptionModal,
  showLocationModal,
} from '../../../../actions/helpActions';
import { default as canUseDom } from "can-use-dom";

const geolocation = (
  canUseDom && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser does not support geolocation.");
    },
  }
);

export const fields = [
  'name',
  'message',
  'description',
  'photos',
  'latitude',
  'longitude',
];

const styles = {
  root: {
    paddingLeft: 40,
    width: '99%',
  },
  textField: {
    width: '90%',
  },
};

const submit = (values, dispatch) => {
  // Here we will assign fields that user does not need to fill.
  // FIXME: name is hardcoded.
  const submitValues = Object.assign({}, values, { name: 'John' });
  return new Promise((resolve, reject) => {
    dispatch(helpSubmit({ submitValues, resolve, reject }));
  });
};

class HelpForm extends React.Component {
  constructor(props) {
    super(props);
    const dispatch = this.props;
    this.handleMarkerPositionChanged = this.handleMarkerPositionChanged.bind(this);
    this.handleLocationSave = this.handleLocationSave.bind(this);
    this.handleLocationDiscard = this.handleLocationDiscard.bind(this);
  }

  componentDidMount() {
    geolocation.getCurrentPosition((position) => {
      this.props.dispatch(centerChanged({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
      this.props.dispatch(markerChanged({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
    });
  }

  handleDescriptionOpen() {
    this.props.dispatch(showDescriptionModal());
  }

  handleLocationOpen() {
    this.props.dispatch(showLocationModal());
  }

  handleLocationSave() {
    this.props.dispatch(saveLocation(this.props.marker));
  }

  handleLocationDiscard() {
    this.props.dispatch(discardLocation());
  }

  handleMarkerPositionChanged(e) {
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();

    // Dispatch an action to tell the new position of the marker
    this.props.dispatch(markerChanged({
      lat: latitude,
      lng: longitude,
    }));
  }

  render() {
    const {
      fields: { name, message, description, latitude, longitude },
      handleSubmit,
      resetForm,
      submitting,
      formValues,
      descriptionModalIsOpened,
      hideDescriptionModalAction,
      hideLocationModalAction,
      locationModalIsOpened,
      locationSaved,
      cancelDescriptionModalAction,
      center,
      marker,
    } = this.props;

    return (
      <div style={styles.root}>
        <h1 className="center">What can you help today?</h1>
        <form onSubmit={handleSubmit(submit.bind(this))}>
          <div>
            <TextField
              style={styles.textField}
              errorText={message.touched && message.error}
              {...message}
              hintText="I want to help ..." />
          </div>
          <div>
            <RaisedButton
              type="submit"
              primary
              disabled={
                isEmpty(formValues) ||
                !formValues.hasOwnProperty('message') ||
                formValues.message === "" ||
                submitting
              }
              label="POST"
              icon={<FontIcon className="material-icons">send</FontIcon>} />
            <IconButton
              tooltip="Description"
              onClick={() => this.handleDescriptionOpen()}
              disabled={submitting}
              >
              <SubjectIcon
                color={
                  !isEmpty(formValues) &&
                  formValues.hasOwnProperty('description') &&
                  formValues.description !== "" ?
                  cyan500 : ''} />
            </IconButton>
            <IconButton
              tooltip="Location"
              onClick={() => this.handleLocationOpen()}
              disabled={submitting}
              >
              {
                locationSaved ?
                  <EditLocationIcon color={cyan500} /> :
                  <AddLocationIcon />
              }
            </IconButton>

          </div>
          <HelpDescriptionModal
            descriptionModalIsOpened={descriptionModalIsOpened}
            hideDescriptionModalAction={hideDescriptionModalAction}
            cancelDescriptionModalAction={cancelDescriptionModalAction}
            description={description}
            />
          <HelpLocationModal
            locationModalIsOpened={locationModalIsOpened}
            hideLocationModalAction={hideLocationModalAction}
            center={center}
            marker={marker}
            handleMarkerPositionChanged={this.handleMarkerPositionChanged}
            handleLocationDiscard={this.handleLocationDiscard}
            handleLocationSave={this.handleLocationSave}
            />
        </form>
      </div>
    );
  }
}

HelpForm.propTypes = {
  actions: PropTypes.object.isRequired,
  cancelDescriptionModalAction: PropTypes.func.isRequired,
  center: PropTypes.object,
  descriptionModalIsOpened: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  formValues: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  hideDescriptionModalAction: PropTypes.func.isRequired,
  hideLocationModalAction: PropTypes.func.isRequired,
  locationModalIsOpened: PropTypes.bool.isRequired,
  locationSaved: PropTypes.bool.isRequired,
  marker: PropTypes.object,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    center: state.help.center,
    descriptionModalIsOpened: state.help.descriptionModalIsOpened,
    formValues: getValues(state.form.help),
    locationModalIsOpened: state.help.locationModalIsOpened,
    locationSaved: state.help.locationSaved,
    marker: state.help.marker,
    submitting: state.help.submitting,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cancelDescriptionModalAction: bindActionCreators(cancelDescriptionModal, dispatch),
    hideDescriptionModalAction: bindActionCreators(hideDescriptionModal, dispatch),
    hideLocationModalAction: bindActionCreators(hideLocationModal, dispatch),
  };
}

const validate = (values) => {
  const errors = {};

  if (isEmpty(values.message)) {
    errors.message = 'Message is required';
  }
  return errors;
};

const helpForm = reduxForm({
  form: 'help',
  fields,
  validate,
})(HelpForm);

export default connect(mapStateToProps, mapDispatchToProps)(helpForm);
