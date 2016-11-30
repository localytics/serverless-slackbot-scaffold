module.exports = {
  entry: './slackbot.js',
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      }
    ]
  }
}
