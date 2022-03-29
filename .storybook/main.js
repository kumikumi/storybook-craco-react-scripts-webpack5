module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-preset-craco" // changing this line to "@storybook/preset-create-react-app" fixes storybook build
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}