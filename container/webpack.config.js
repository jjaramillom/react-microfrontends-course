const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // XXX@yyy  XXX has to match the name given in the remote's webpack config file to the federation plugin.
        productsApp: 'products@http://localhost:8081/remoteEntry.js',
      },
    }),
  ],
};
