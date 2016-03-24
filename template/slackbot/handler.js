'use strict';

var SlackBot = require('lambda-slack-router');
var slackBot = new SlackBot({ token: process.env.SLACK_VERIFICATION_TOKEN });

slackBot.addCommand('ping', 'Ping the lambda', function (options, callback) {
  callback(null, this.inChannelResponse('Hello World'));
});

slackBot.addCommand('echo', ['words...'], 'Echo the given arguments', function (options, callback) {
  callback(null, this.ephemeralResponse(options.args.words.join(' ')));
});

module.exports.handler = slackBot.buildRouter();
module.exports.slackBot = slackBot;
