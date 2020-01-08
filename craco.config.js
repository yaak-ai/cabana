/* eslint-disable */
const WorkerLoaderPlugin = require('craco-worker-loader');

module.exports = function ({ env }) {
  const plugins = [
    {
      plugin: WorkerLoaderPlugin
    }
  ];
  return {
    plugins,
    jest: {
      configure: (jestConfig, { env, paths }) => {
        jestConfig.testPathIgnorePatterns = ['node_modules', '__puppeteer__'];
        return jestConfig;
      }
    },
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.output.globalObject = 'this';
        webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.map(
          (plugin) => {
            if (plugin.constructor.name !== 'TerserPlugin') {
              return plugin;
            }
            plugin.options.terserOptions.keep_fnames = true;
            return plugin;
          }
        );
        return webpackConfig;
      }
    }
  };
};
