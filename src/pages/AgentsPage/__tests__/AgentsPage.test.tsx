import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render, screen, waitFor, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";

import { useDataContext } from "../../../context/DataContext";
import { getAgents } from "../../../services/agents/getAgents";
import { mockUserResults } from "../../../services/__mocks__/userResults";

import AgentsPage from "../AgentsPage";

jest.mock("../../../context/DataContext");
jest.mock("../../../services/agents/getAgents");

afterEach(() => {
    cleanup();
    jest.resetAllMocks();
});

describe("Agents Page", () => {
    test("The agents page renders the instance's current active agents by queue.", async () => {

        const selectedQueueId = "all";
        const mockAgents = [{ id: 1, firstName: "Agent", lastName: "One", queueName: "Queue 1" }];

        (useDataContext as jest.Mock).mockReturnValue({
            user: mockUserResults,
            selectedQueueId: selectedQueueId
        });

        (getAgents as jest.Mock).mockResolvedValue({ data: mockAgents });

        render(
            <Router>
                <AgentsPage />;
            </Router>
        );

        expect(screen.getByTestId("txt-loading")).toBeInTheDocument();
        expect(screen.getByTestId("txt-loading")).toHaveTextContent(`Loading agents from Queue ${selectedQueueId}...`);

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
            expect(getAgents).toHaveBeenCalledWith(mockUserResults.instanceId, selectedQueueId);
        });

        await waitForElementToBeRemoved(() => screen.getByTestId("txt-loading"));

        expect(screen.queryByTestId("txt-loading")).not.toBeInTheDocument();
        expect(screen.getByText("Agent One")).toBeInTheDocument();
        
    });

    test("The agents page renders no agents found.", async () => {

        const selectedQueueId = "all";

        (useDataContext as jest.Mock).mockReturnValue({
            user: mockUserResults,
            selectedQueueId: selectedQueueId
        });

        (getAgents as jest.Mock).mockResolvedValue({ data: [] });

        render(
            <Router>
                <AgentsPage />;
            </Router>
        );

        expect(screen.getByTestId("txt-loading")).toBeInTheDocument();
        expect(screen.getByTestId("txt-loading")).toHaveTextContent(`Loading agents from Queue ${selectedQueueId}...`);

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
            expect(getAgents).toHaveBeenCalledWith(mockUserResults.instanceId, selectedQueueId);
        });

        await waitForElementToBeRemoved(() => screen.getByTestId("txt-loading"));

        expect(screen.queryByTestId("txt-loading")).not.toBeInTheDocument();

        expect(screen.getByTestId("txt-error")).toBeInTheDocument();
        expect(screen.getByTestId("txt-error")).toHaveTextContent(`No agents found.`);
        
    });
});
