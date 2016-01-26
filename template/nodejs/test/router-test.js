var chai = require('chai'),
  expect = chai.expect,
  slackbot = require('../resource/slackbot/handler'),
  slack = require('localytics-slack'),
  sinon = require('sinon');

chai.use(require('dirty-chai'));
chai.use(require('sinon-chai'));

describe('router', function() {
  var context = {}, sandbox;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    context.done = sandbox.spy();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('responds to help', function() {
    slackbot.handler({
      'body': {
        'token': process.env.SLACK_VERIFICATION_TOKEN,
        'text': 'help'
      }
    }, context);
    expect(context.done).to.have.been.calledOnce();
    expect(context.done).to.have.been.calledWithExactly(
      undefined,
      slack.ephemeralResponse(
        'ping: Ping the lambda\n' +
        'whoami: Figure out who you are'
      )
    );
  });
});
