import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, useAuth, AuthContextType } from '../../../../context/AuthContext';
import ForgotPage from '../ForgotPage'; // Make sure this import points to your ForgotPage component

// Mock the useAuth hook to control its return value
jest.mock('../../../../context/AuthContext', () => ({
  ...jest.requireActual('../../../../context/AuthContext'),
  useAuth: jest.fn(),
}));

describe('ForgotPage', () => {
  const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders ForgotForm when user is not authenticated', async () => {
    const mockAuthContext: AuthContextType = {
      user: null,
      loading: false,
      signIn: jest.fn(),
      signOut: jest.fn(),
      register: jest.fn(),
    };
    mockUseAuth.mockReturnValue(mockAuthContext);

    await act(async () => {
      render(
        <AuthProvider>
          <Router>
            <ForgotPage />
          </Router>
        </AuthProvider>
      );
    });

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByText('Send recovery code')).toBeInTheDocument();
  });

  test('redirects to dashboard when user is authenticated', async () => {
    const mockUser = {
      uid: '123',
      email: 'test@example.com',
      emailVerified: true,
      isAnonymous: false,
      metadata: {},
      providerData: [],
      refreshToken: '',
    };
    const mockAuthContext: AuthContextType = {
      user: mockUser as any,
      loading: false,
      signIn: jest.fn(),
      signOut: jest.fn(),
      register: jest.fn(),
    };
    mockUseAuth.mockReturnValue(mockAuthContext);

    await act(async () => {
      render(
        <AuthProvider>
          <Router>
            <ForgotPage />
          </Router>
        </AuthProvider>
      );
    });

    // Ensure the Navigate component is rendering, which indicates a redirect
    expect(screen.queryByLabelText('Email')).not.toBeInTheDocument();
    expect(screen.queryByText('Send recovery code')).not.toBeInTheDocument();
  });
});
