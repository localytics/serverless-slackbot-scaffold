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
var _ = require('lodash'),
  qs = require('qs');

// Lambda Handler
module.exports.handler = function(event, context) {
  return exports.router(exports.commands())(event, context);
};

module.exports.commands = function() {
  return {
    ping: function(context, options) {
      context.succeed({
        text: 'Hello World',
        response_type: 'in_channel'
      });
    },
    help: function(context, options) {
      context.succeed({
        text: "Here's how to use {{basename}}:",
        attachments: [
          {
            text: 'ping: Ensure this bot is running\n' +
              'help: Show this help text'
          }
        ],
        response_type: 'ephemeral'
      });
    }
  };
};

module.exports.router = function (commands) {
  return function (event, context) {
    var response;
    var body = qs.parse(event.body);

    if (!body.token || body.token != process.env.SLACK_VERIFICATION_TOKEN) {
      return context.fail('Access Denied');
    }

    if (body.text) {
      var splitCommand = body.text.split(" ");
      var command = _.first(splitCommand);
      var args = _.rest(splitCommand);
    }

    if (commands[command]) {
      response = commands[command](context, {
        args: args,
        userName: body.user_name
      });
    } else {
      response = context.succeed({ text: 'This is the default response' });
    }

    return response;
  };
};
