module.exports = {
  extends: ['pretty/es6', 'pretty/promise', 'pretty/ava', 'pretty/prettier'],
  parserOptions: {sourceType: 'module'},
  rules: {'no-magic-numbers': 0},
};
