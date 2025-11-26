import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { useAuth } from '../../context/AuthContext';

// Mock useAuth
jest.mock('../../context/AuthContext', () => ({
    useAuth: jest.fn(),
}));

// Mock Navigate and Outlet
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: ({ to }: { to: string }) => <div>Redirected to {to}</div>,
    Outlet: () => <div>Protected Content</div>,
}));

const mockUseAuth = useAuth as jest.Mock;

describe('PrivateRoute Component', () => {
    const AuthenticatedUser = { user: { uid: '123' } };
    const UnauthenticatedUser = { user: null };

    const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
        return render(
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    <Route path="/" element={ui}>
                        <Route path="protected" element={<PrivateRoute />} />
                        <Route path="auth" element={<div>Auth Page</div>} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should render Outlet when user is authenticated', () => {
        mockUseAuth.mockReturnValue(AuthenticatedUser);

        renderWithRouter(<PrivateRoute />, { route: '/protected' });

        expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });

    test('should navigate to /auth when user is not authenticated', () => {
        mockUseAuth.mockReturnValue(UnauthenticatedUser);

        renderWithRouter(<PrivateRoute />, { route: '/protected' });

        expect(screen.queryByText('Protected Content')).toBeNull();
        expect(screen.getByText('Redirected to /auth')).toBeInTheDocument();
    });
});
