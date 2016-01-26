#slackbot-scaffold

## Usage

Build the integration in Slack (https://localytics.slack.com/apps/manage/A0F82E8CA-slash-commands) and retreive the slack verification token.

Install khaos (https://github.com/segmentio/khaos)

    $ npm install -g khaos

Install the template to your local machine

    $ khaos install localytics/slackbot-scaffold slackbot

Run the templating engine

    $ khaos create slackbot <project-name>

Fill in the appropriate fields, using the verification token from when you created the integration in Slack.

## Deployment

First, set the env variable in AWS using Serverless:

    $ sls env set -s <stage> -k SLACK_VERIFICATION_TOKEN -v <token>

Then, deploy the resources:

    $ sls resources deploy -s <stage>

Next, deploy the function and endpoint:

    $ cd nodejs
    $ sls dash deploy -s <stage>

Take the postback url, enter it into the slack integration configuration, and save.
