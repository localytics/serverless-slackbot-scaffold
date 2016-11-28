#{{basename}}

## Development

This project uses the `lambda-slack-router` node module found here: <https://github.com/localytics/lambda-slack-router>. For documentation on how to add subcommands to the router, see the README.

## Configuration

Install the necessary node modules by running `npm install` in the root of the repository:

    $ npm install

## Deployment

This project uses `serverless` for deployment. Trigger the `serverless` CLI through the `sls` command, and use that to deploy:

    $ sls deploy

Take the postback url, enter it into the slack integration configuration, and save.

## Testing

    $ npm run lint
    $ npm test
