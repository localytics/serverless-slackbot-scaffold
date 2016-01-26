var handler = require('../slackbot/handler'),
  slack = require('localytics-slack/slackbot'),
  sinon = require('sinon');

describe('handler', function() {
  var callback, sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    callback = sandbox.spy();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('responds to ping', function() {
    handler.ping(null, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly([
      null,
      slack.inChannelResponse('Hello World')
    ]);
  });

  it('responds to whoami', function() {
    handler.whoami({ userName: 'foobar' }, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly([
      null,
      slack.ephemeralResponse('foobar')
    ]);
  });
});
