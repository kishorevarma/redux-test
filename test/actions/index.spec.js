/**
 * Created by kishorevarman on 15/06/16.
 */
import actionTypes from '../../src/shared/constants/actionTypes';
import {toggleRead} from '../../src/shared/actions/index.js';

describe('Toggle Read Action', () => {
  it('should return object with proper data', (done) => {
    const action = toggleRead({id: 2, read: false});
    action.should.eql({
      type: actionTypes.TOGGLE_READ,
      data: {id: 2, read: false}
    });
    done();
  })
})