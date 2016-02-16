#slackbot-scaffold

## Usage

Build the slash command in Slack (<https://slack.com/apps/manage/custom-integrations>) and retreive the slack verification token.

Install khaos (<https://github.com/segmentio/khaos>)

    $ npm install -g khaos

Install the template to your local machine

    $ khaos install localytics/slackbot-scaffold slackbot

Run the templating engine

    $ khaos create slackbot <project-name>

Fill in the appropriate fields, using the verification token from when you created the integration in Slack.

## Deployment

For configuration, deployment, and testing instructions, refer to the templated README file within the new project directory.
