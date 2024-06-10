import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthLayout from './AuthLayout';

describe('AuthLayout Component', () => {
    const renderWithChildren = (children: React.ReactNode) => {
        return render(
            <AuthLayout>
                {children}
            </AuthLayout>
        );
    };

    test('should render the main container with correct class names', () => {
        renderWithChildren(<div>Test Content</div>);

        const mainContainer = document.querySelector('.grid.grid-rows-2.h-screen.w-screen.relative');
        expect(mainContainer).toBeInTheDocument();
    });

    test('should render the login page image with correct attributes', () => {
        renderWithChildren(<div>Test Content</div>);

        const loginImage = screen.getByAltText('login page image');
        expect(loginImage).toBeInTheDocument();
        expect(loginImage).toHaveAttribute('src', '/loginFoto.png');
        expect(loginImage).toHaveClass('h-full w-full');
    });

    test('should render the children inside the layout', () => {
        renderWithChildren(<div>Test Content</div>);

        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('should render the logo image with correct attributes', () => {
        renderWithChildren(<div>Test Content</div>);

        const logoImage = screen.getByAltText('logo image');
        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveAttribute('src', '/logo.png');
        expect(logoImage).toHaveClass('grid-span-2');
    });

    test('should correctly nest the children between images', () => {
        renderWithChildren(<div>Test Content</div>);

        const mainContainer = document.querySelector('.grid.grid-rows-2.h-screen.w-screen.relative');
        const loginImageContainer = mainContainer?.querySelector('.grid-span-1');
        const logoImageContainer = mainContainer?.querySelector('.flex.justify-center.items-end.pb-5');
        const childrenContainer = screen.getByText('Test Content');

        expect(loginImageContainer).toBeInTheDocument();
        expect(logoImageContainer).toBeInTheDocument();
        expect(childrenContainer).toBeInTheDocument();

        expect(loginImageContainer?.nextElementSibling).toBe(childrenContainer);
        expect(logoImageContainer?.previousElementSibling).toBe(childrenContainer);
    });
});
