import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { darkWhite } from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';
import spacing from 'material-ui/styles/spacing';

const styles = {
  appBar: {
    position: 'fixed',
    padding: spacing.desktopGutter,
    top: 0,
    width: '100%',
  },
};

class Header extends React.Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <AppBar
        style={styles.root}
        iconElementLeft={
          <IconButton
            containerElement={<Link to="/" />}>
            <NavigationClose />
          </IconButton>}
          iconElementRight={
            // TODO: Change the icon once you have
            <IconMenu
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
            {
              loggedIn ? <MenuItem primaryText="Log out" /> :
                <MenuItem
                  primaryText="Log in"
                  linkButton
                  containerElement={<Link to="/login" />} />
            }

            </IconMenu>
          }
          />
      );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.user.loggedIn,
  };
}

export default connect(mapStateToProps)(Header);
