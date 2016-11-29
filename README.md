#serverless-slackbot-scaffold

[![Build Status](https://travis-ci.org/localytics/serverless-slackbot-scaffold.svg?branch=master)](https://travis-ci.org/localytics/serverless-slackbot-scaffold)

This project is a [khaos template](https://github.com/segmentio/khaos) for building an AWS lambda service that acts as a [slack slash commands](https://api.slack.com/slash-commands) processor. It uses the [Serverless framework](https://github.com/serverless/serverless) for easier deployment to AWS.

## Usage

From the [custom integrations page](<https://slack.com/apps/manage/custom-integrations>) in slack, add a "Slash Commands" integration and retreive the slack verification token.

Install khaos

    $ npm install -g khaos

Install the template to your local machine

    $ khaos install localytics/serverless-slackbot-scaffold slackbot

Run the templating engine

    $ khaos create slackbot <project-name>

Enter the slack token and hit enter. A new directory will be created that will contain your templated slackbot. If you prefer to have different stages and regions configured for your slackbot, you can modify those settings in `serverless.yml`. See the `Serverless` docs for more information.

## Development

Refer to the templated README file within the new project directory for configuration, deployment, and testing instructions.

## Testing

For testing the template itself, run `bin/test`. Note for test speed, the dependencies are then cached for all subsequent runs in `cache.tar`.
