var expect = require('chai').expect;
  slackBot = require('../slackbot/handler').slackBot;

describe('slackbot', function() {
  var received, receivedArgs, callback = function(error, success) {
    received = true;
    receivedArgs = [error, success];
  };

  beforeEach(function() {
    received = false;
    receivedArgs = [];
  });

  it('responds to ping', function() {
    slackBot.ping(null, callback);
    expect(received).to.be.true;
    expect(receivedArgs).to.deep.eq([null, slackBot.inChannelResponse('Hello World')]);
  });

  it('responds to echo', function() {
    slackBot.echo({ args: { words: ['one', 'two', 'three'] } }, callback);
    expect(received).to.be.true;
    expect(receivedArgs).to.deep.eq([null, slackBot.ephemeralResponse('one two three')]);
  });
});
