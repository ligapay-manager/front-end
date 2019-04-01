// test/app-spec-jsx
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

// needed for animations
jest.useFakeTimers();


it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
