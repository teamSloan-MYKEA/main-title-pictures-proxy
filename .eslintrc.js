/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    'shared-node-browser': true,
    jest: true,
  },
  rules: {
    'no-console': 'off',
  },
};
