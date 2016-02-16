#{{basename}}

## Development

This project uses the `localytics-slack` node module found here: <https://github.com/localytics/localytics-slack>. For documentation on how to add subcommands to the router, see the README.

## Configuration

Install the necessary node modules by running `npm install` in both the root directory and `nodejs` directory:

    $ npm install
    $ cd nodejs
    $ npm install

## Deployment

First, set the env variable in AWS using Serverless:

    $ sls env set -s <stage> -k SLACK_VERIFICATION_TOKEN -v <token>

Then, deploy the resources:

    $ sls resources deploy -s <stage>

Next, deploy the function and endpoint:

    $ cd nodejs
    $ sls dash deploy -s <stage>

Take the postback url, enter it into the slack integration configuration, and save.

## Testing

`cd` into the correct directory and run `npm test`:

    $ cd nodejs
    $ npm test
