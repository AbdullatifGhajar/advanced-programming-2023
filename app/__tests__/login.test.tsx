import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../src/pages/authentication/LoginPage';

const mockNavigate = jest.fn();
const mockLocation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
}));

test('renders successfully with email field, password field and submit button', () => {
  // Render the LoginPage component
  render(<LoginPage />);

  // Expect the email and password fields to be present
  expect(screen.getByLabelText(/Email address/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/)).toBeInTheDocument();

  // Expect the submit button to be present
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
});
