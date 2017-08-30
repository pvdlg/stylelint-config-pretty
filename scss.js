module.exports = {
  extends: './index.js',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    // @-else
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',

    // @-extend
    'scss/at-extend-no-missing-placeholder': true,

    // @-function
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': null,

    // @-if
    'scss/at-if-closing-brace-newline-after': null,
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // @-import
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-import-partial-extension-whitelist': null,

    // @-rule
    'scss/at-rule-no-unknown': true,

    // @-mixin
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': null,

    // $-variables
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': null,

    // %-placeholder
    'scss/percent-placeholder-pattern': null,

    // //-comment
    'scss/double-slash-comment-empty-line-before': null,
    'scss/double-slash-comment-inline': ['never', {ignore: ['stylelint-commands']}],
    'scss/double-slash-comment-whitespace-inside': 'always',

    // Declaration
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,

    // Media feature
    'scss/media-feature-value-dollar-variable': 'always',

    // Operator
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,

    // Partial
    'scss/partial-no-import': null,

    // Selector
    'scss/selector-no-redundant-nesting-selector': true,
  },
};
