import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

// Mocks
jest.mock('../../context/AuthContext', () => ({
    AuthProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="AuthProvider">{children}</div>,
}));

jest.mock('../../context/ErrorContext', () => ({
    ErrorProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="ErrorProvider">{children}</div>,
}));

jest.mock('../../context/DataContext', () => ({
    DataProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="DataProvider">{children}</div>,
}));

jest.mock('./Navbar', () => () => <div data-testid="Navbar">Navbar</div>);
jest.mock('./Sidebar/Sidebar', () => () => <div data-testid="Sidebar">Sidebar</div>);

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, { wrapper: BrowserRouter });
};

describe('Layout Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should render children within providers on non-auth pages', () => {
        renderWithRouter(
            <Layout>
                <div>Test Children</div>
            </Layout>,
            { route: '/' }
        );

        expect(screen.getByTestId('AuthProvider')).toBeInTheDocument();
        expect(screen.getByTestId('ErrorProvider')).toBeInTheDocument();
        expect(screen.getByTestId('DataProvider')).toBeInTheDocument();
        expect(screen.getByTestId('Navbar')).toBeInTheDocument();
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
        expect(screen.getByText('Test Children')).toBeInTheDocument();
    });

    test('should render children without Navbar and Sidebar on auth pages', () => {
        renderWithRouter(
            <Layout>
                <div>Auth Page</div>
            </Layout>,
            { route: '/auth/login' }
        );

        expect(screen.getByTestId('AuthProvider')).toBeInTheDocument();
        expect(screen.getByTestId('ErrorProvider')).toBeInTheDocument();
        expect(screen.getByTestId('DataProvider')).toBeInTheDocument();
        expect(screen.queryByTestId('Navbar')).toBeNull();
        expect(screen.queryByTestId('Sidebar')).toBeNull();
        expect(screen.getByText('Auth Page')).toBeInTheDocument();
    });

    test('should render children without Navbar and Sidebar on auth pages with different auth path', () => {
        renderWithRouter(
            <Layout>
                <div>Auth Page Different Path</div>
            </Layout>,
            { route: '/auth/register' }
        );

        expect(screen.getByTestId('AuthProvider')).toBeInTheDocument();
        expect(screen.getByTestId('ErrorProvider')).toBeInTheDocument();
        expect(screen.getByTestId('DataProvider')).toBeInTheDocument();
        expect(screen.queryByTestId('Navbar')).toBeNull();
        expect(screen.queryByTestId('Sidebar')).toBeNull();
        expect(screen.getByText('Auth Page Different Path')).toBeInTheDocument();
    });
});
