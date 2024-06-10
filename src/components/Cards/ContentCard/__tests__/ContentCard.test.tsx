import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentCard from '../ContentCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Tests for ContentCard Component", () => {
    test("Content card has to render with children", () => {
        render(
            <Router>
                <ContentCard>
                    <div data-testid="child-element">This is a child element</div>
                </ContentCard>
            </Router>
        );

        expect(screen.getByTestId("child-element")).toBeTruthy();
        expect(screen.getByTestId("child-element")).toHaveTextContent("This is a child element");
    });
});
