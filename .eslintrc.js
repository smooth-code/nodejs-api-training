module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  env: { node: true },
  rules: {
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
  },
}
