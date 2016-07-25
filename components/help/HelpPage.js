import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHelpsFeed } from '../../actions/helpActions';
import HelpForm from '../common/help/HelpForm';
import HelpFeedItem from '../common/help/presentation/HelpFeedItem';

function loadData(props) {
  props.getHelpsFeed();
}

class HelpPage extends React.Component {

  componentDidMount() {
    loadData(this.props);
  }

  render() {
    const { helps, items, isFetching } = this.props;
    return (
      <div>
        <div className="container">
          <ul className="collection">
            {items.map(item =>
              <HelpFeedItem key={item.id} item={item} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

HelpPage.propTypes = {
  helps: PropTypes.object.isRequired,
  getHelpsFeed: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};


function mapStateToProps(state, ownProps) {
  return {
    helps: state.helps,
    items: state.helps.items,
    isFetching: state.helps.isFetching,
  };
}

export default connect(mapStateToProps, { getHelpsFeed })(HelpPage);
