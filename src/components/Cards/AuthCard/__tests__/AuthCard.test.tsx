import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthCard from '../AuthCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Tests for AuthCard Component", () => {
    test("Card must work with child in it", () => {
        render(
            <Router>
                <AuthCard>
                    <div data-testid="child-element">Hi tests</div>
                </AuthCard>
            </Router>
        );

        expect(screen.getByTestId("child-element")).toBeTruthy();
        expect(screen.getByTestId("child-element")).toHaveTextContent("Hi tests");
    });
});