/**
 * Created by kishorevarman on 14/06/16.
 */
import React, { Component, PropTypes } from 'react';
import MessageRow from './MessageRow';

const propTypes = {
  messages: PropTypes.array,
  readCount: PropTypes.number,
  toggleRead: PropTypes.func
};
export default class MessagesTable extends Component {

  toggleRead(message) {
    this.props.toggleRead(message);
  }
  render() {
    const { messages = [], readCount } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td colSpan="2">Read Count: <span className="readCount">{readCount}</span></td>
          </tr>
        </thead>
        <tbody>
        {
          messages.map(message => <MessageRow {...message} onClick={::this.toggleRead} key={message.id} />)
        }
        </tbody>
      </table>
    );
  }
}

MessagesTable.propTypes = propTypes;
