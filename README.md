#slackbot-scaffold

[![Build Status](https://travis-ci.com/localytics/slackbot-scaffold.svg?token=kQUiABmGkzyHdJdMnCnv&branch=master)](https://travis-ci.com/localytics/slackbot-scaffold)

This project is a [khaos template](https://github.com/segmentio/khaos) for building an AWS lambda service that acts as a [Slack slash commands](https://api.slack.com/slash-commands) processor. It uses the [Serverless framework](https://github.com/serverless/serverless) for easier deployment to AWS.

## Usage

Build the slash command in Slack (<https://slack.com/apps/manage/custom-integrations>) and retreive the slack verification token.

Install khaos

    $ npm install -g khaos

Install the template to your local machine

    $ khaos install localytics/slackbot-scaffold slackbot

Run the templating engine

    $ khaos create slackbot <project-name>

Fill in the appropriate fields, using the verification token from when you created the integration in Slack.

## Development

Refer to the templated README file within the new project directory for configuration, deployment, and testing instructions.
