/**
 * Created by kishorevarman on 15/06/16.
 */
import messagesReducer from '../../src/shared/reducers/messagesReducer';
import actionTypes from '../../src/shared/constants/actionTypes';
const intialState = {
  messages : [
    {message: 'I have learned React', read: false, id: 1},
    {message: 'I have learned NodeJs', read: false, id: 2},
    {message: 'I have learned Redux', read: false, id: 3},
    {message: 'I have learned Es6', read: false, id: 4},
    {message: 'I have learned Webpack', read: false, id: 5}
  ],
  readCount: 0
};
describe('message Reducer', () => {
  describe('toggle read', () => {
    it('read messages count should be one', (done) => {
      const newState = messagesReducer(
        intialState,
        {
          type: actionTypes.TOGGLE_READ,
          data: {message: 'I have learned NodeJs', read: false, id: 2}
        }
      );
      newState.readCount.should.eql(1);
      done();
    });
    it('message read flag should toggle to false', (done) => {
      const newState = messagesReducer(
        intialState,
        {
          type: actionTypes.TOGGLE_READ,
          data: {message: 'I have learned NodeJs', read: true, id: 2}
        }
      );
      newState.messages[1].read.should.eql(false);
      done();
    });
    it('default it should return initial state', (done) => {
      const newState = messagesReducer(undefined, {type:undefined});
      newState.should.eql(intialState);
      done();
    });
  });
});