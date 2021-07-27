const path = require('path');
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');
const Dotenv = require('dotenv-webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');

module.exports = (env, argv) => {
  const orgName = 'test';
  const projectName = 'sample-lib';

  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve('src/'),
      },
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      disableHostCheck: true,
      https: false,
    },
    plugins: [
      new SystemJSPublicPathWebpackPlugin({
        systemjsModuleName: `@${orgName}/${projectName}`,
      }),
      new VueLoaderPlugin(),
    ],
    externals: [
      'vue',
      'single-spa',
      'v-calendar',
      /^@test\/.+/,
    ],
  });
};
