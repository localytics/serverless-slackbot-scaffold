import { slackbot } from '../slackbot';
import chai from 'chai';
import sinon from 'sinon';

const expect = chai.expect;
chai.use(require('dirty-chai'));
chai.use(require('sinon-chai'));

describe('handler', () => {
  let callback;

  beforeEach(() => {
    callback = sinon.spy();
  });

  it('/ping', () => {
    slackbot.ping(null, callback);
    expect(callback).to.have.been.calledOnce();

    const response = slackbot.inChannelResponse('Hello World');
    expect(callback).to.have.been.calledWithExactly(null, response);
  });

  it('/echo', () => {
    slackbot.echo({ args: { words: ['one', 'two', 'three'] } }, callback);
    expect(callback).to.have.been.calledOnce();

    const response = slackbot.ephemeralResponse('one two three');
    expect(callback).to.have.been.calledWithExactly(null, response);
  });
});
