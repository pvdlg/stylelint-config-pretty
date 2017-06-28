module.exports = {
  'extends': './index.js',
  'plugins': ['stylelint-scss'],
  'rules': {
    // @-else
    'scss/at-else-closing-brace-newline-after': false,
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',

    // @-extend
    'scss/at-extend-no-missing-placeholder': true,

    // @-function
    'scss/at-function-pattern': false,

    // @-if
    'scss/at-if-closing-brace-newline-after': false,
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // @-import
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-import-partial-extension-whitelist': false,

    // @-mixin
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': false,

    // $-variables
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': false,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': false,

    // %-placeholder
    'scss/percent-placeholder-pattern': false,

    // //-comment
    'scss/double-slash-comment-empty-line-before': false,
    'scss/double-slash-comment-inline': false,
    'scss/double-slash-comment-whitespace-inside': 'always',

    // Declaration
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,

    // Media feature
    'scss/media-feature-value-dollar-variable': true,

    // Operator
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,

    // Partial
    'scss/partial-no-import': true,

    // Selector
    'scss/selector-no-redundant-nesting-selector': true
  }
};
