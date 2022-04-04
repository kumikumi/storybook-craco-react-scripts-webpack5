const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: 'storybook-preset-craco',
      options: {
        cracoConfigFile: path.join(__dirname, 'craco.storybook.config.js'),
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}