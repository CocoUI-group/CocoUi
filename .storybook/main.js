const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
            implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    config.mode === 'production' && (config.output.publicPath = 'http://static.linzhihui.online/storybook-static/');
    return config;
  },
  managerWebpack:  (config) => {
    config.mode === 'production' &&  (config.output.publicPath = 'http://static.linzhihui.online/storybook-static/');
    return config;
  },
}