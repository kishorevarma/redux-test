import * as actionTypes from '../constants/actionTypes';
export const toggleRead = (message) => (
  {
    type: actionTypes.default.TOGGLE_READ,
    data: message
  }
);