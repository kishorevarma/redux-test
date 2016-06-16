import actionTypes from '../constants/actionTypes';
import { findIndex } from 'lodash';

const defaultState = {
  messages : [
    { message: 'I have learned React', read: false, id: 1 },
    { message: 'I have learned NodeJs', read: false, id: 2 },
    { message: 'I have learned Redux', read: false, id: 3 },
    { message: 'I have learned Es6', read: false, id: 4 },
    { message: 'I have learned Webpack', read: false, id: 5 }
  ],
  readCount: 0
};

const messagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_READ: {
      const messages = state.messages;
      const readMessage = action.data;
      const readCount = readMessage.read ? state.readCount - 1 : state.readCount + 1;
      const index = findIndex(messages, message => message.id === readMessage.id);
      messages[index].read = !readMessage.read;
      return { ...state, messages, readCount };
    }
    default: {
      return state;
    }
  }
};
export default messagesReducer;