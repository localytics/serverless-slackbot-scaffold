'use strict';

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
var SlackBot = require('lambda-slack-router'),
  Twitter = require('twitter');

// Slack subcommands
var slackBot = new SlackBot({ token: process.env.SLACK_VERIFICATION_TOKEN }),
  twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

slackBot.addCommand('tweet message...', 'Tweet out the given message', function(options, callback) {
  var _this = this;
  twitter.post('statuses/update', { status: options.args.message.join(' ') }, function(error, tweet, response) {
    if(error) {
      callback(error, null);
    }
    else {
      var text = 'Tweet successfully posted! ' + 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str;
      callback(null, _this.ephemeralResponse(text));
    }
  });
});

slackBot.addCommand('search query', 'Search twitter for a specific word and return the first 10 tweets', function(options, callback) {
  var _this = this;
  twitter.get('search/tweets', { q: options.args.query }, function(error, tweets, response) {
    if(error) {
      callback(error, null);
    }
    else {
      var text = tweets.statuses.map(function(tweet) {
        return '@' + tweet.user.screen_name + ': ' + tweet.text;
      }).join("\n");

      callback(null, _this.inChannelResponse({
        text: 'The following tweets contain the word "' + options.args.query + '":',
        attachments: [{ text: text }]
      }));
    }
  });
});

// Router configuration
module.exports.handler = slackBot.buildRouter();
