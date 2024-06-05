import React from 'react';
import { render, screen } from '@testing-library/react';
import InsightDescription from '../InsightDescription';
import { BrowserRouter as Router } from 'react-router-dom';
import { IInsightDescription } from '../types';

describe("Tests for InsightDescription Component", () => {
    const props: IInsightDescription = {
        title: "Test title",
        message: "Test message paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        situationTitle: "Situation",
        actionTitle: "Recommended Action",
        insightRootCause: "Watching south park when cartman gives kyle hiv",
        insightImpact: "bored affffff",
        insightPrevention: "naaaaaaaa",
        insightSeverity: "HIGH", // Valid value
        insightCategory: "CRITICAL" // Valid value
    };

    test("The InsightDescription component renders correctly with given props", () => {
        render(
            <Router>
                <InsightDescription {...props} />
            </Router>
        );

        expect(screen.getByText("Test title")).toBeTruthy();
        expect(screen.getByText("Situation")).toBeTruthy();
        expect(screen.getByText("Test message paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBeTruthy();
        expect(screen.getByText("Recommended Action")).toBeTruthy();
        expect(screen.getByText("Watching south park when cartman gives kyle hiv")).toBeTruthy();
        expect(screen.getByText("bored affffff")).toBeTruthy();
        expect(screen.getByText("naaaaaaaa")).toBeTruthy();
        expect(screen.getByText("HIGH")).toBeTruthy();
        expect(screen.getByText("CRITICAL")).toBeTruthy();
    });

    test("The InsightDescription renders icon", () => {
        render(
            <Router>
                <InsightDescription {...props} />
            </Router>
        );

        const alertIcon = screen.getByAltText("Alert icon");
        expect(alertIcon).toBeTruthy();
        expect(alertIcon).toHaveAttribute('src', expect.stringContaining('alert.svg'));
    });
});
