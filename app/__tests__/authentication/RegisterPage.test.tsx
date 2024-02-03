import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import RegisterPage from '../../src/pages/authentication/RegisterPage';
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
        register: jest.fn().mockResolvedValue('success'),
    }),
}));

test('renders successfully with name field , email field, password field and submit button', () => {
    render(<RegisterPage />);

    // Expect the name, email and password fields to be present
    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/)).toBeInTheDocument();

    // Expect the submit button to be present
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
});

test('should call register function with name, email and password on form submission', () => {
    render(<RegisterPage />);

    const nameField = screen.getByLabelText(/Name/);
    const emailField = screen.getByLabelText(/Email Address/);
    const passwordField = screen.getByLabelText(/Password/);
    const submitButton = screen.getByRole('button', { name: 'Register' });

    const testName = 'test';
    const testEmail = 'test@example.com';
    const testPassword = 'password123';

    fireEvent.change(nameField, { target: { value: testName } });
    fireEvent.change(emailField, { target: { value: testEmail } });
    fireEvent.change(passwordField, { target: { value: testPassword } });

    fireEvent.click(submitButton);

    expect(AuthenticationService).toHaveBeenCalled();
    expect(new AuthenticationService().register).toHaveBeenCalledWith(testName, testEmail, testPassword);
});

it('should redirect to home page when valid email and password are entered and previous page is not available', () => {
    // Mock the navigate function
    mockNavigate.mockImplementationOnce(() => { });

    // Set the location state to null
    mockLocation.mockReturnValueOnce({ state: null });

    // Render the RegisterPage component
    render(<RegisterPage />);

    // Fill in the email and password fields
    const nameField = screen.getByLabelText(/Name/);
    const emailField = screen.getByLabelText(/Email Address/);
    const passwordField = screen.getByLabelText(/Password/);
    const submitButton = screen.getByRole('button', { name: 'Register' });

    fireEvent.change(nameField, { target: { value: 'test' } });
    fireEvent.change(emailField, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordField, { target: { value: 'password123' } });

    // Click the submit button
    fireEvent.click(submitButton);

    // Expect the navigate function to be called with '/'
    expect(mockNavigate).toHaveBeenCalledWith('/');

    // Reset the mock
    mockNavigate.mockReset();
});

// TODO add test for failed register