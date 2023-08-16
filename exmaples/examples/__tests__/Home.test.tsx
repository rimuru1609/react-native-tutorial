import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import App from '../App';
import {it, jest, expect} from '@jest/globals';

// afterEach(cleanup);

//mocking async storage module
const mockedSetItem = jest.fn();

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: mockedSetItem,
}));

it('renders/navigates throughout app screens', () => {
  // Render the app from teh root
  render(<App />);

  // Check whether we're in the home screen
  expect(screen.getByText(/App.tsx/i)).toBeDefined();
  expect(screen.getByText(/current count: 0/i)).toBeDefined();

  // Navigate to counter screen by pressing on button
  fireEvent.press(screen.getByText(/counter/i));
  // Check that navigation was succeeded by inspecting correspondeing text on the screen
  //  screen.getByTestId()
  //   expect(screen.getByText(/current count: 0/i)).toBe('');
  expect(screen.getByText(/current count: 1/i)).toBeDefined();
});
