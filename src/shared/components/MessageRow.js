/**
 * Created by kishorevarman on 15/06/16.
 */
import React, { Component, PropTypes } from 'react';
const propTypes = {
  message: PropTypes.string,
  read: PropTypes.bool,
  id: PropTypes.number
};
export default class MessagesRow extends Component {
  render() {
    const {message, read, id, onClick} = this.props;
    return (
      <tr>
        <td>{message}</td>
        <td><input type="checkbox" checked={read} onClick={_ => onClick({id, read})}/></td>
      </tr>
    );
  }
}
MessagesRow.propTypes = propTypes;