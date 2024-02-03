import { fireEvent, render, screen } from '@testing-library/react';

import LoginPage from '../../src/pages/authentication/LoginPage';
import AuthenticationService from '../../src/services/AuthenticationService';

const mockNavigate = jest.fn();
const mockLocation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
}));

jest.mock('../../src/services/AuthenticationService', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    login: jest.fn().mockResolvedValue('success'),
  }),
}));

test('renders successfully with email field, password field and submit button', () => {
  // Render the LoginPage component wrapped with Router
  render(<LoginPage />);

  // Expect the email and password fields to be present
  expect(screen.getByLabelText(/Email address/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/)).toBeInTheDocument();

  // Expect the submit button to be present
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
});

test('should call login function with email and password on form submission', () => {
  render(<LoginPage />);

  const emailField = screen.getByLabelText(/Email address/);
  const passwordField = screen.getByLabelText(/Password/);
  const submitButton = screen.getByRole('button', { name: 'Login' });

  const testEmail = 'test@example.com';
  const testPassword = 'password123';

  fireEvent.change(emailField, { target: { value: testEmail } });
  fireEvent.change(passwordField, { target: { value: testPassword } });

  fireEvent.click(submitButton);

  expect(AuthenticationService).toHaveBeenCalled();
  expect(new AuthenticationService().login).toHaveBeenCalledWith(
    testEmail,
    testPassword,
  );
});

it('should redirect to home page when valid email and password are entered and previous page is not available', () => {
  // Mock the navigate function
  mockNavigate.mockImplementationOnce(() => {});

  // Set the location state to null
  mockLocation.mockReturnValueOnce({ state: null });

  // Render the LoginPage component
  render(<LoginPage />);

  // Fill in the email and password fields
  const emailField = screen.getByLabelText(/Email address/);
  const passwordField = screen.getByLabelText(/Password/);
  const submitButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.change(emailField, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordField, { target: { value: 'password123' } });

  // Click the submit button
  fireEvent.click(submitButton);

  // Expect the navigate function to be called with '/'
  expect(mockNavigate).toHaveBeenCalledWith('/');

  // Reset the mock
  mockNavigate.mockReset();
});

// TODO add test for failed login
