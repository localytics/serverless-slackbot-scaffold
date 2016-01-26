var chai = require('chai'),
  expect = chai.expect,
  slackbot = require('../resource/slackbot/handler'),
  slack = require('localytics-slack'),
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
    slackbot.ping(null, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly(
      null,
      slack.inChannelResponse('Hello World')
    );
  });

  it('responds to whoami', function() {
    slackbot.whoami({ userName: 'foobar' }, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWithExactly(
      null,
      slack.ephemeralResponse('foobar')
    );
  });
});
