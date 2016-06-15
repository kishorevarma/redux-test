/**
 * Created by kishorevarman on 15/06/16.
 */
import React from 'react';
import MessagesTable from '../../src/shared/components/MessagesTable';
import sinon from 'sinon';
import {
  renderIntoDocument,
  Simulate,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils'
const onClickStub = sinon.stub();

describe('Messages Table Component', () => {
  it('Click event should call action creator with proper message', (done) => {
    const messages = {messages: [
      {id: 3, message: 'I am learning everything', read: false}
    ], readCount: 0};
    const component = renderIntoDocument(
      <MessagesTable {...messages} toggleRead={onClickStub}/>
    );
    const checkbox = scryRenderedDOMComponentsWithTag(component, 'input');
    Simulate.click(checkbox[0]);
    onClickStub.calledWith({id: 3, read: false}).should.eql(true);
    done();
  });

  it('should render all the messages', (done) => {
    const messages = {messages: [
      {id: 3, message: 'I am learning everything', read: false},
      {id: 4, message: 'I am learning nothing', read: false}

    ], readCount: 0};
    const component = renderIntoDocument(
      <MessagesTable {...messages} toggleRead={onClickStub}/>
    );
    const checkbox = scryRenderedDOMComponentsWithTag(component, 'input');
    checkbox.length.should.eql(2);
    done();
  });

  it('should render readCount', (done) => {
    const messages = {messages: [
      {id: 3, message: 'I am learning everything', read: false},
    ], readCount: 4};
    const component = renderIntoDocument(
      <MessagesTable {...messages} toggleRead={onClickStub}/>
    );
    const readCount = findRenderedDOMComponentWithClass(component, 'readCount');
    readCount.innerHTML.should.eql('4');
    done();
  });
})