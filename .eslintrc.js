// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'elemefe', 'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-debugger': [1],
    'indent': [2, 4, { 'SwitchCase': 1 }],
    'vue/html-indent': ['error', 4, {
        'attribute': 1,
        'closeBracket': 0,
        'alignAttributesVertically': true,
        'ignores': []
    }],
    'vue/require-default-prop': [0],
    'vue/require-v-for-key': [0],
    'vue/valid-v-for': [0],
    'vue/no-confusing-v-for-v-if': [0],
    'vue/require-prop-types': 'off'
  },
  'globals': {
      "_": true,
      "$": true,
      "G6Editor": true
  }
}
