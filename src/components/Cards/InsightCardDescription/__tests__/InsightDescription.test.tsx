import React from 'react';
import { render, screen } from '@testing-library/react';
import InsightDescription from '../InsightDescription';
import { BrowserRouter as Router } from 'react-router-dom';
import { IInsightDescription } from '../types';

describe("Tests for InsightDescription Component", () => {
    const props: IInsightDescription = {
        title: "System Alert",
        message: "There is an issue with the server.",
        situationTitle: "Situation",
        actionTitle: "Recommended Action",
        insightRootCause: "Server overload due to high traffic",
        insightImpact: "Users experiencing delays",
        insightPrevention: "Optimize server performance",
        insightSeverity: "HIGH", // Valid value
        insightCategory: "CRITICAL" // Valid value
    };

    test("The InsightDescription component renders correctly with given props", () => {
        render(
            <Router>
                <InsightDescription {...props} />
            </Router>
        );

        expect(screen.getByText("System Alert")).toBeTruthy();
        expect(screen.getByText("Situation")).toBeTruthy();
        expect(screen.getByText("There is an issue with the server.")).toBeTruthy();
        expect(screen.getByText("Recommended Action")).toBeTruthy();
        expect(screen.getByText("Server overload due to high traffic")).toBeTruthy();
        expect(screen.getByText("Users experiencing delays")).toBeTruthy();
        expect(screen.getByText("Optimize server performance")).toBeTruthy();
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
