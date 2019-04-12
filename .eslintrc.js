module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off',
    'import/newline-after-import': ['error', { count: 2 }],
    'object-curly-newline': 'off',
    'max-len': ['error', { code: 110 }],
    'object-property-newline': 'off'
  },
  globals: {
    fetch: false
  }
};
