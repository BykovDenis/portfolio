export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['src/css/normalize.css'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-z0-9-]*(__[a-z0-9-]+)?(--[a-z0-9-]+)?$',
      { message: 'Expected class selector to be kebab-case or BEM (block__element--modifier)' },
    ],
    'color-hex-length': null,
    'color-function-notation': null,
    'color-function-alias-notation': null,
    'alpha-value-notation': null,
    'font-family-name-quotes': null,
    'import-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
