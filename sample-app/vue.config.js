const path = require('path');
const webpack = require('webpack');

module.exports = () => {
  const orgName = 'test';
  const projectName = 'sample-app';

  return {
    lintOnSave: false,
    chainWebpack: (config) => {
      config.module.rules.delete('svg');
    },
    configureWebpack: {
      output: {
        filename: `${orgName}-${projectName}.js`,
        chunkFilename: `${orgName}-${projectName}.js`,
      },
      devServer: {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        disableHostCheck: true,
        https: false,
      },
      module: {
        rules: [{
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        }],
      },
      plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      ],
      externals: [
        'vue',
        'vue-router',
        'single-spa',
        /^@test\/.+/,
      ],
    },
    filenameHashing: false,
  };
};
