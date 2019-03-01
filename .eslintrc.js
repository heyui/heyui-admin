module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  "globals": {
    "HeyUI": true,
    "Utils": true,
    "Manba": true,
    "Vue": true,
    "R": true,
    "G": true,
    "log": true,
    "Model": true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [
      "error",
      "always"
    ],
    "eqeqeq": "off",
    "linebreak-style": [
        "error",
        "unix"
    ],
    "no-useless-call": "off",
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
