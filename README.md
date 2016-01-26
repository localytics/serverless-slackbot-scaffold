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

## Publishing

Once the templating is done, a few files should be added to the gitignore. They are in there so that they get the correct values from the template, but they are meant to stay only on a local machine. The files are:

* .env
* admin.env

## Deployment

For configuration, deployment, and testing instructions, refer to the templated README file within the new project directory.
