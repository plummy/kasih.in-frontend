import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import HelpMap from './HelpMap';

const styles = {
  modal: {
    width: '80%',
    maxWidth: 'none',
  },
  textarea: {
    width: '100%',
  },
};

const HelpLocationModal = (props) =>
  <Dialog
    title="Choose your location"
    open={props.locationModalIsOpened}
    contentStyle={styles.modal}
    actions={[
      <FlatButton
        key="cancelButton"
        label="Cancel"
        primary
        onTouchTap={props.handleLocationDiscard}
      />,
      <FlatButton
        key="saveButton"
        label="Save"
        primary
        onTouchTap={props.handleLocationSave}
      />,
    ]}>
    <HelpMap
      style={{
        width: '100%',
        height: '400px',
      }}
      defaultZoom={18}
      center={props.center}
      marker={props.marker}
      draggable
      handleDragend={props.handleMarkerPositionChanged} />
  </Dialog>;

HelpLocationModal.defaultProps = {
  center: { lat: 59.938043, lng: 30.337157 },
  marker: { lat: 59.938043, lng: 30.337157 },
  zoom: 9,
};

HelpLocationModal.propTypes = {
  center: PropTypes.object,
  handleLocationSave: PropTypes.func.isRequired,
  handleLocationDiscard: PropTypes.func.isRequired,
  handleMarkerPositionChanged: PropTypes.func,
  hideLocationModalAction: PropTypes.func.isRequired,
  locationModalIsOpened: PropTypes.bool.isRequired,
  marker: PropTypes.object,
  zoom: PropTypes.number.isRequired,
};

export default HelpLocationModal;
