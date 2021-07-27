const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
const dotenv = require('dotenv')

module.exports = (env) => {
  const orgName = 'test';
  const projectName = 'sample-orc';

  return {
    entry: path.resolve('./src/root.config'),
    output: {
      filename: `${orgName}-${projectName}.js`,
      libraryTarget: 'system',
      path: path.resolve('dist'),
    },
    resolve: {
      alias: {
        '@': path.resolve('src/')
      }
    },
    devtool: 'sourcemap',
    module: {
      rules: [
        { parser: { system: false } },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        }
      ],
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      disableHostCheck: true,
      historyApiFallback: true,
      https: false,
    },
    plugins: [
      new SystemJSPublicPathWebpackPlugin({
        systemjsModuleName: `@${orgName}/${projectName}`
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: '!!ejs-webpack-loader!src/templates/index.ejs',
      }),
      new CleanWebpackPlugin(),
    ],
    externals: [
      'single-spa',
      /^@test\/.+$/
    ],
  }
}
