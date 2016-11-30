'use strict';

import SlackBot from 'lambda-slack-router';
const slackbot = new SlackBot({ token: process.env.SLACK_VERIFICATION_TOKEN });

slackbot.addCommand('ping', 'Ping the lambda', (options, callback) => {
  callback(null, slackbot.inChannelResponse('Hello World'));
});

slackbot.addCommand('echo', ['words...'], 'Echo the given arguments', (options, callback) => {
  callback(null, slackbot.ephemeralResponse(options.args.words.join(' ')));
});

module.exports.handler = slackbot.buildRouter();
module.exports.slackbot = slackbot;
