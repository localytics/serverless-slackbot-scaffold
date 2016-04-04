'use strict';

import GitHub from 'github';
import SlackBot from 'lambda-slack-router';

const github = new GitHub({ version: '3.0.0' });
const slackbot = new SlackBot({ token: process.env.SLACK_VERIFICATION_TOKEN });

github.authenticate({ type: 'token', token: process.env.GITHUB_TOKEN });

slackbot.addCommand('repo', ['path'], 'Get metadata about a repo', (options, callback) => {
  const split = options.args.path.split('/');

  github.repos.get({ user: split[0], repo: split[1] }, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, slackbot.inChannelResponse(JSON.stringify(res)));
    }
  });
});

slackbot.addCommand('user', ['name'], 'Get metadata about a user', (options, callback) => {
  github.user.get({ user: options.args.name }, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, slackbot.inChannelResponse(JSON.stringify(res)));
    }
  });
});

module.exports.handler = slackbot.buildRouter();
