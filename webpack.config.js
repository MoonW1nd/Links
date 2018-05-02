const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
};
