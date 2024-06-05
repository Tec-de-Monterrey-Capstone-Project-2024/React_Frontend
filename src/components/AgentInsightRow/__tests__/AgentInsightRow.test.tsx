import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import AgentInsightRow from '../AgentInsightRow';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
    cleanup();
});

describe("Tests for AgentInsightRow Component", () => {
    test("The AgentInsightRow component renders correctly", () => {
        render(
            <Router>
                <AgentInsightRow
                    id={0}
                    firstName={"Abigail"}
                    lastName={'Curiel'}
                    queueName={'Basic Queue'}
                    color={'white'}
                    button={true}
                />
            </Router>
        );

        expect(screen.getByTestId("agent-insight-row-wrapper")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-row-name")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-row-queue")).toBeTruthy();
        expect(screen.getByTestId("agent-insight-row-button")).toBeTruthy();

        expect(screen.getByTestId("agent-insight-row-button")).toHaveTextContent('Show more');

        fireEvent.click(screen.getByTestId("agent-insight-row-button"));
    });
});