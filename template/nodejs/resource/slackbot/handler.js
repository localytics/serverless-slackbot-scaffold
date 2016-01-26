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
var slack = require('localytics-slack/slackbot');

// Function configuration
module.exports = {
  ping: function(options, callback) {
    callback(null, slack.inChannelResponse('Hello World'));
  },

  whoami: function(options, callback) {
    callback(null, slack.ephemeralResponse(options.userName));
  },

  // Slack router configuration
  handler: slack.router({ token: process.env.SLACK_VERIFICATION_TOKEN }, {
    ping: ['Ping the lambda', this.ping],
    whoami: ['Figure out who you are', this.whoami]
  })
};
