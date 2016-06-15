/**
 * Created by kishorevarman on 14/06/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  children: PropTypes.any
};

export default class AppView extends Component {
  render() {
    return (
      <div id="app-view">
        {this.props.children}
      </div>
     );
  }
}
AppView.propTypes = propTypes;
