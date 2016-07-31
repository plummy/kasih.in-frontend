import React, { PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const HelpMap = (props) =>
  <GoogleMapLoader
    containerElement={
      <div
        style={props.style}
      />
    }
    googleMapElement={
      <GoogleMap
        defaultZoom={props.defaultZoom}
        defaultCenter={props.center}
      >
        <Marker
          draggable={props.draggable}
          position={props.marker}
          onDragend={props.handleDragend}
        />

      </GoogleMap>
    }
  />;

HelpMap.propTypes = {
  style: PropTypes.object.isRequired,
  center: PropTypes.object.isRequired,
  marker: PropTypes.object.isRequired,
  draggable: PropTypes.bool,
  defaultZoom: PropTypes.number.isRequired,
  handleDragend: PropTypes.func,
};

HelpMap.defaultProps = {
  style: {
    width: '100%',
    height: '400px',
  },
  defaultZoom: 18,
  draggable: false,
};

export default HelpMap;
