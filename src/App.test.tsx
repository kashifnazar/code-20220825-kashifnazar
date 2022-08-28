import React from 'react';
import { render, screen } from '@testing-library/react';
import {within} from '@testing-library/dom'
import App from './App';

test('renders the title', () => {
  render(<App />);
  expect(screen.getByText("Rethink your living & renting")).toBeTruthy()
});
