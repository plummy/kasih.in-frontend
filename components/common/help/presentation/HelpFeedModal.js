import React, { PropTypes } from 'react';
import Modal from 'react-modal';

class HelpFeedModal extends React.Component {
  componentDidMount() {
    // React.findDOMNode(this).modal('show');
    // React.findDOMNode(this).on('hidden.bs.modal', this.props.handleHideModal);
    
  }
  render() {
    return (
      <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!" 
            className="modal-action modal-close waves-effect waves-green">
            Agree
          </a>
        </div>
      </div>
    );
  }
}

HelpFeedModal.propTypes = {
  handleHideModal: PropTypes.func.isRequired,
};


export default HelpFeedModal;
