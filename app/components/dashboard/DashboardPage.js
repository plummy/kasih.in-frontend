import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from '../../actions/dashboardActions';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import AboutPage from '../about/AboutPage';
import DialogPage from '../dialog/DialogPage';
import HelpPage from '../help/HelpPage';
import MessagesPage from '../messages/MessagesPage';
import ProjectsPage from '../projects/ProjectsPage';
import SupportPage from '../support/SupportPage';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showPage = this.showPage.bind(this);
  }

  showPage(page) {
    switch (page) {
      case 'feeds':
        return <HelpPage />;
      case 'messages':
        return <MessagesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'support':
        return <SupportPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <DialogPage />;
    }
  }
  handleClick(page) {
    this.props.pageSwitcher(page);
  }
  render() {
    const { page, pageSwitcher } = this.props;
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={3} sm={3} md={2} lg={2} >
              <List>
                <ListItem
                  primaryText="Feeds"
                  onClick={() => this.handleClick("feeds")} />
                <ListItem
                  primaryText="Charity Project"
                   />
                <ListItem
                  primaryText="Inbox"
                   />
              </List>
              <Divider />
              <List>
                <ListItem primaryText="Support" />
                <ListItem
                  primaryText="About"
                  onClick={() => this.handleClick('about')} />
              </List>
            </Col>
            <Col xs={6} sm={6} md={6} lg={7}>
              {
                this.showPage(page)
              }
            </Col>
            <Col xs={3} sm={3} md={4} lg={3}>Test2</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


DashboardPage.propTypes = {
  page: PropTypes.string,
  pageSwitcher: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    page: state.dashboard.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageSwitcher: bindActionCreators(dashboardActions, dispatch).pageSwitcher,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
