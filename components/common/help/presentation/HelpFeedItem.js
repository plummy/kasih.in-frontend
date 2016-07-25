import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { 
  Card, 
  CardActions, 
  CardHeader, 
  CardMedia, 
  CardTitle, 
  CardText } from 'material-ui/Card';

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
      subtitle=""
      avatar="images/yuna.jpg" />
    <CardTitle 
      title={props.item.message} 
      subtitle="" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
