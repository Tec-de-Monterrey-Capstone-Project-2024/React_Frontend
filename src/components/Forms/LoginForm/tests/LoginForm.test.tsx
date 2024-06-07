import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../LoginForm';
import { useAuth } from '../../../../context/AuthContext';
import { useDataContext } from '../../../../context/DataContext';
import { useError } from '../../../../context/ErrorContext';
import { loginUser } from '../../../../services/user/loginUser';

// Mock the useAuth hook
jest.mock('../../../../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

// Mock the useDataContext hook
jest.mock('../../../../context/DataContext', () => ({
  useDataContext: jest.fn(),
}));

// Mock the useError hook
jest.mock('../../../../context/ErrorContext', () => ({
  useError: jest.fn(),
}));

// Mock the loginUser service
jest.mock('../../../../services/user/loginUser', () => ({
  loginUser: jest.fn(),
}));

describe('LoginForm', () => {
  const mockSignIn = jest.fn();
  const mockSignOut = jest.fn();
  const mockSetUser = jest.fn();
  const mockSetLoginError = jest.fn();
  const mockSetSignupError = jest.fn();
  const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;
  const mockUseDataContext = useDataContext as jest.MockedFunction<typeof useDataContext>;
  const mockUseError = useError as jest.MockedFunction<typeof useError>;

  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      user: null,
      loading: false,
      signIn: mockSignIn,
      signOut: mockSignOut,
      register: jest.fn(),
    });
    mockUseDataContext.mockReturnValue({
      user: null,
      setUser: mockSetUser,
      arn: '',
      setArn: jest.fn(),
      selectedQueueId: 'all',
      setSelectedQueueId: jest.fn(),
    });
    mockUseError.mockReturnValue({
      loginError: null,
      setLoginError: mockSetLoginError,
      signupError: null,
      setSignupError: mockSetSignupError,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the login form', () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Forgot Password')).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
  });

  test('shows error message on invalid login', async () => {
    const errorMessage = 'Invalid credentials';
    mockSignIn.mockRejectedValue(new Error(errorMessage));
    mockSetLoginError.mockImplementation(() => {});

    render(
      <Router>
        <LoginForm />
      </Router>
    );

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login-button/i }));

    await waitFor(() => expect(mockSetLoginError).toHaveBeenCalledWith(errorMessage));

    expect(screen.getByText('Invalid Credentials, try again.')).toBeInTheDocument();
  });

  test('redirects to dashboard on successful login', async () => {
    const firebaseId = 'firebaseId123';
    const mockResponse = { status: 200, data: { id: 'user123', email: 'test@example.com' } };
    mockSignIn.mockResolvedValue(firebaseId);
    (loginUser as jest.MockedFunction<typeof loginUser>).mockResolvedValue(mockResponse);

    render(
      <Router>
        <LoginForm />
      </Router>
    );

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login-button/i }));

    await waitFor(() => expect(mockSetUser).toHaveBeenCalledWith(mockResponse.data));
    expect(mockSetLoginError).toHaveBeenCalledWith(null);
  });
});
