/**
 * Created by kishorevarman on 14/06/16.
 */
import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.any
};

const AppView = ({ children }) => (
  <div id="app-view"> {children} </div>
);


AppView.propTypes = propTypes;
export default AppView;
