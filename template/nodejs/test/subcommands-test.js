var chai = require('chai'),
  expect = chai.expect,
  handler = require('../resource/slackbot/handler'),
  SlackBot = require('localytics-slack'),
  sinon = require('sinon');

chai.use(require('dirty-chai'));
chai.use(require('sinon-chai'));

describe('subcommands', function() {
  var callback, sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    callback = sandbox.spy();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('responds to ping', function() {
    handler.slackBot.callCommand('ping', null, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly(
      null,
      slack.inChannelResponse('Hello World')
    );
  });

  it('responds to whoami', function() {
    handler.slackBot.callCommand('whoami', { userName: 'foobar' }, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly(
      null,
      slack.ephemeralResponse('foobar')
    );
  });
});
