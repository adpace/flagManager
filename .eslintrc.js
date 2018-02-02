// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root         : true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env          : {
    browser: true,
  },
  extends      : [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins      : [
    'vue'
  ],
  // add your custom rules here
  rules        : {
    // allow async-await
    'generator-star-spacing' : 'off',
    // allow debugger during development
    'no-debugger'            : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // disable indent rule warnings in console
    'indent'                 : 0,
    // disable key spacing warnings in console
    'key-spacing'            : 0,
    // disable multiple spaces warnings in console
    'no-multi-spaces'        : 0,
    // disable blank line warnings in console
    'no-multiple-empty-lines': 0,
    // disable curly brace on same line warnings in console
    'brace-style'            : 0,
    // disable space after comment slashes warnings in console
    'spaced-comment'         : 0,
    // disable extra semicolon warnings in console
    'semi'                   : 0
  }
}
