/**
 * Created by kishorevarman on 14/06/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MessagesTable from '../components/MessagesTable';

function mapStateToProps(state) {
  return {
    messages: state.messagesReducer.messages,
    readCount: state.messagesReducer.readCount
  };
};

@connect(mapStateToProps, actions)
export default class MessagesContainer extends Component {
  render() {
    return (
      <MessagesTable {...this.props} />
    );
  }
}
