#{{basename}}

## Development

This project uses the `lambda-slack-router` node module found here: <https://github.com/localytics/lambda-slack-router>. For documentation on how to add subcommands to the router, see the README.

## Configuration

Install the necessary node modules by running `npm install` in both the root directory and `slackbot` directory:

    $ npm install
    $ cd slackbot
    $ npm install

## Deployment

Deploy the resources:

    $ sls resources deploy

Next, deploy the function and endpoint:

    $ cd slackbot
    $ sls dash deploy

Take the postback url, enter it into the slack integration configuration, and save.

## Testing

    $ npm run lint
    $ npm test
