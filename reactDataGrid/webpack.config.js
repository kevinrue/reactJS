const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');


const common = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HtmlWebpackTemplate,
      title: 'Demo app',
      appMountId: 'render-target', // Generate #app where to mount
      mobile: true, // Scale page on mobile
      inject: false, // html-webpack-template requires this to work
    }),
  ],
};

module.exports = function(env) {
  entry: {
    app: "client/main"
  }
};