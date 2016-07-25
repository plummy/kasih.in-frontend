import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText } from 'material-ui/Card';
import isEmpty from 'lodash/isEmpty';
import TextField from 'material-ui/TextField';
import HelpMap from './HelpMap';


// TODO: Optimize the usage of cards
// CardMedia: Add card media / maps?
// CardTitle => Subtitle?
// CardText => Message?
// CardActions: What actions can a user do?
// Source: http://www.material-ui.com/ => Components => Cards

const HelpFeedItem = (props) =>
  <Card>
    <CardHeader
      title={props.item.name}
      subtitle={props.item.message}
      actAsExpander={
        !isEmpty(props.item.description) ||
        ((props.item.hasOwnProperty('latitude') && props.item.hasOwnProperty('longitude')) &&
        (props.item.latitude !== undefined && props.item.longitude !== undefined))
      }
      showExpandableButton={
        !isEmpty(props.item.description) ||
        ((props.item.hasOwnProperty('latitude') && props.item.hasOwnProperty('longitude')) &&
        (props.item.latitude !== undefined && props.item.longitude !== undefined))
      }
      avatar="images/yuna.jpg" />
    <CardText expandable>
      <div style={{ padding: '5px' }}>
        {props.item.description}
      </div>
      <div>
        {
          (props.item.hasOwnProperty('latitude') && props.item.hasOwnProperty('longitude')) &&
          (props.item.latitude !== undefined && props.item.longitude !== undefined) ?
            <HelpMap
              style={{
                width: '100%',
                height: '200px',
                padding: '5px',
              }}
              center={{
                lat: props.item.latitude,
                lng: props.item.longitude,
              }}
              marker={{
                lat: props.item.latitude,
                lng: props.item.longitude,
              }} /> : ''
        }
      </div>
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>;

HelpFeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HelpFeedItem;
