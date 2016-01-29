'use strict';

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
var SlackBot = require('localytics-slack');

// Slack subcommands
var slackBot = new SlackBot({ token: process.env.SLACK_VERIFICATION_TOKEN });

slackBot.addCommand('ping', 'Ping the lambda', function(options, callback) {
  callback(null, this.inChannelResponse('Hello World'));
});

slackBot.addCommand('whoami', 'Figure out who you are', function(options, callback) {
  callback(null, this.ephemeralResponse(options.userName));
});

// Router configuration
module.exports.handler = slackBot.router;
module.exports.slackBot = slackBot;
