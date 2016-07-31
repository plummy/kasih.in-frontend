// This component handle the Application template used in every page
import React, { PropTypes } from 'react';
import Header from './common/Header';

const App = (props) =>
  <div>
    <Header />
    {props.children}
  </div>;

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
