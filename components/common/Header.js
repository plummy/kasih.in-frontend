import React from 'react';
import { Link, IndexLink } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { darkWhite, grey800, black } from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';
import spacing from 'material-ui/styles/spacing';

const styles = {
  icon: {
    fill: black,
  },
};

const Header = () => (
  <AppBar
    iconElementLeft={
      <IconButton
        iconStyle={styles.icon}
        containerElement={<Link to="/" />}>
        <NavigationClose style={styles.icon} />
      </IconButton>
    }
    iconElementRight={
        // TODO: Change the icon once you have
      <IconMenu 
          iconStyle={styles.icon}
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
        <MenuItem 
            primaryText="About"
            containerElement={<Link to="/about" />}
          />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
      /> 
);

export default Header;
