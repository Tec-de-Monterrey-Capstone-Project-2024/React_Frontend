import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ForgotForm from '../ForgotForm';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; // Import the auth functions

// Mock the firebase/auth module
jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(),
    sendPasswordResetEmail: jest.fn().mockResolvedValue(Promise.resolve(true)) // Mock resolved value
}));

describe("Tests for Forgot Page Component", () => {
    test("Forgot page renders correctly", () => {
        render(
            <Router>
                <ForgotForm />
            </Router>
        );

        // Check for the presence of the email input and submit button
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByText(/Send recovery code/i)).toBeInTheDocument();
    });

    test("Forgot page triggers password reset email on form submission", async () => {
        // Mock the return value of getAuth
        const auth = getAuth(); // Mocked auth object

        render(
            <Router>
                <ForgotForm />
            </Router>
        );

        // Fill out the form and submit it
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
        fireEvent.click(screen.getByText(/Send recovery code/i));

        // Wait for the asynchronous operation to complete
        await screen.findByText(/login/i);

        // Check if sendPasswordResetEmail was called with the correct email
        expect(sendPasswordResetEmail).toHaveBeenCalledWith(expect.anything(), 'test@example.com');
    });
});