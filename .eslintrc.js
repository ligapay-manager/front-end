module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'import/newline-after-import': ['error', { 'count': 2 }]
  },
  'globals': {
    'fetch': false
  }
}