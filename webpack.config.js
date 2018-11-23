module.exports = {
  mode: 'development',
  entry: [
    './client/index.js'
  ],
  output: {
    filename: '[name]-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};