import { render, screen, cleanup } from '@testing-library/react';
import InsightDescription from '../InsightDescription';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
    cleanup();
});

describe("Test for InsightDescription component", () => {
    test("The component should render correctly", () => {
        render(
            <Router>
                <InsightDescription
                    title="Insight Title"
                    message="This is an insight message"
                    situationTitle="Situation Title"
                    actionTitle="Action Title"
                    insightRootCause="Root cause"
                    insightImpact="Impact"
                    insightPrevention="Prevention"
                    insightSeverity="LOW"
                    insightCategory="CRITICAL"
                />
            </Router>
        );

        expect(screen.getByTestId("agent-insight-title")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-message")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-Action")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-Root-cause")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-Impact")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-Prevention")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-Severity")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-category")).toBeTruthy();
    });
});
