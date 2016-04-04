import { slackbot } from '../slackbot/handler';
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
    expect(callback).to.have.been.calledWithExactly(null, slackbot.inChannelResponse('Hello World'));
  });

  it('/echo', () => {
    slackbot.echo({ args: { words: ['one', 'two', 'three'] } }, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly(null, slackbot.ephemeralResponse('one two three'));
  });
});
