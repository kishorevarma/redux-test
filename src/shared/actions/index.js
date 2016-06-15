import * as actionTypes from '../constants/actionTypes';
export const toggleRead = (message) => {
  return {
    type: actionTypes.default.TOGGLE_READ,
    data: message
  };
};