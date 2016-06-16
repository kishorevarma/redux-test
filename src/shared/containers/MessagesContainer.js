/**
 * Created by kishorevarman on 14/06/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MessagesTable from '../components/MessagesTable';

function mapStateToProps(state) {
  return {
    messages: state.messagesReducer.messages,
    readCount: state.messagesReducer.readCount
  };
}

const MessagesContainer = ({ ...props }) => (
  <MessagesTable {...props} />
);

export default connect(mapStateToProps, actions)(MessagesContainer);