module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/test/**/*.spec.jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
