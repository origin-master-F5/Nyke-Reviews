const path = require('path');
const SRC_DIR = path.join(__dirname, '/client-react/src');
const DIST_DIR = path.join(__dirname, '/client-react/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }
    ]
  }
};

// ,
// {
//   test: /\.css$/,
//     loader: "style-loader!css-loader"
// }
// might need, not sure what its doing exactly