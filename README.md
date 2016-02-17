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

You will be prompted in fill in metadata fields about the project. The names and descriptions of each field are below:

* `slack-token`: The token displayed on the custom integration page in Slack.
* `aws-access-key-id`: Your AWS access key id. This will be used for deploys, and will be gitignored.
* `aws-secret-access-key`: Your AWS secret access key. As above, it will be used for deploys and gitignored.
* `author`: The name of the author of this Slackbot. It is used inside of the two package.json files.
* `github-user-or-org`: The owner of this repository. As above, it is used in the package.json files.
* `aws-s3-bucket`: The bucket to which to deploy resources for the slackbot. This will need to follow the Serverless convention of having the region in the name, and will typically look something like serverless.us-east-1.localytics.
* `notification-email`: The email to which to send notifications about the lambda.

Once every field has been filled in, a new directory will be created that will contain your templated slackbot.

## Development

Refer to the templated README file within the new project directory for configuration, deployment, and testing instructions.
