/**
 * Created by kishorevarman on 15/06/16.
 */
import React, { PropTypes } from 'react';
const propTypes = {
  message: PropTypes.string,
  read: PropTypes.bool,
  id: PropTypes.number,
  onClick: PropTypes.func
};
const MessagesRow = ({ message, read, id, onClick }) => (
  <tr>
    <td>{message}</td>
    <td><input type="checkbox" checked={read} onClick={() => onClick({ id, read })} /></td>
  </tr>
);

MessagesRow.propTypes = propTypes;
export default MessagesRow;