var chai = require('chai'),
  expect = chai.expect,
  slackBot = require('../slackbot/handler').slackBot,
  sinon = require('sinon');

chai.use(require('dirty-chai'));
chai.use(require('sinon-chai'));

describe('slackbot', function() {
  var callback, sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    callback = sandbox.spy();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('responds to ping', function() {
    slackBot.ping(null, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly(
      null,
      slackBot.inChannelResponse('Hello World')
    );
  });

  it('responds to whoami', function() {
    slackBot.whoami({ userName: 'foobar' }, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly(
      null,
      slackBot.ephemeralResponse('foobar')
    );
  });
});
