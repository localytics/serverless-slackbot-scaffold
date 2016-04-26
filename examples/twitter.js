'use strict';

import SlackBot from 'lambda-slack-router';
import Twitter from 'twitter';

const slackbot = new SlackBot({ token: process.env.SLACK_VERIFICATION_TOKEN });
const twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

slackbot.addCommand('tweet', ['message...'], 'Tweet out the given message', (event, callback) => {
  twitter.post('statuses/update', { status: event.args.message.join(' ') }, (error, tweet) => {
    if (error) {
      callback(error, null);
    } else {
      const text = `Tweet successfully posted! https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
      callback(null, slackbot.ephemeralResponse(text));
    }
  });
});

slackbot.addCommand('search', ['query'], 'Search twitter for a specific word and return the first 10 tweets', (event, callback) => {
  twitter.get('search/tweets', { q: event.args.query }, (error, tweets) => {
    let text;

    if (error) {
      callback(error, null);
    } else {
      text = tweets.statuses.slice(0, 10).map(tweet => `@${tweet.user.screen_name}: ${tweet.text}`).join('\n');

      callback(null, slackbot.inChannelResponse({
        text: `The following tweets contain the word "${event.args.query}":`,
        attachments: [{ text }],
      }));
    }
  });
});

module.exports.handler = slackbot.buildRouter();
