'use strict';

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
var GitHub = require('github'),
  SlackBot = require('lambda-slack-router');

// Slack subcommands
var github = new GitHub({ version: '3.0.0' }),
  slackBot = new SlackBot({ token: process.env.SLACK_VERIFICATION_TOKEN });

github.authenticate({ type: 'token', token: process.env.GITHUB_TOKEN });

slackBot.addCommand('repo path', 'Get metadata about a repo', function(options, callback) {
  var _this = this,
    split = options.args.path.split('/');

  github.repos.get({ user: split[0], repo: split[1] }, function(err, res) {
    if(err)
      callback(err, null);
    else
      callback(null, _this.inChannelResponse(JSON.stringify(res)));
  });
});

slackBot.addCommand('user name', 'Get metadata about a user', function(options, callback) {
  var _this = this;

  github.user.get({ user: options.args.name }, function(err, res) {
    if(err)
      callback(err, null);
    else
      callback(null, _this.inChannelResponse(JSON.stringify(res)));
  });
});

// Router configuration
module.exports.handler = slackBot.buildRouter();
