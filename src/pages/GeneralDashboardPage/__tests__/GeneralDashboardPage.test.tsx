import GeneralDashboardPage from "../GeneralDashboardPage";

import { DataProvider, useDataContext } from "../../../context/DataContext";
import { mockMetricsResults } from "../../../context/_mocks_/metricResults";
import { mockInsightsResults } from "../../../context/_mocks_/insightResults";
import { mockQueueResults } from "../../../context/_mocks_/queueResults";

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate, useNavigation } from "react-router-dom";
import React from "react";
import { mockUserResults } from "../../../context/_mocks_/userResults";
import { AuthProvider } from "../../../context/AuthContext";
import { ErrorProvider } from "../../../context/ErrorContext";

jest.mock("../../../context/DataContext.tsx");

afterEach(() => {
    cleanup();
    jest.resetAllMocks();
})

describe("General Dashboard Page", () => {
    test("The general dashboard page renders successfully for all queues", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            user: mockUserResults,
            arn: "arn:aws:connect:us-east-1:674530197385:instance/7c78bd60-4a9f-40e5-b461-b7a0dfaad848",
            selectedQueueId: "all"
        });

        render(
            <Router>
                <GeneralDashboardPage />;
            </Router>
        );

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
        });

        // Verify organization of elements/components
        expect(screen.queryByTestId("dashboard-content")).hasChildNodes;
        expect(screen.queryByTestId("queue-container")).not.toBeInTheDocument();
        expect(screen.queryByTestId("column-metrics")?.hasChildNodes);
        expect(screen.queryByTestId("metrics-container")).hasChildNodes;
        expect(screen.queryByTestId("column-insights")).hasChildNodes;
        expect(screen.queryByTestId("insights-container")).hasChildNodes;

        // View metric details
        // fireEvent.click(screen.getByTestId("metric-card-1"));
        // expect(useNavigate()).toHaveBeenCalled();

        // Graph in metric details
        expect(screen.queryByTestId("graph-container"));

    });

    test("The general dashboard page renders successfully an specific queue", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            user: mockUserResults,
            arn: "arn:aws:connect:us-east-1:674530197385:instance/7c78bd60-4a9f-40e5-b461-b7a0dfaad848",
            selectedQueueId: "BasicQueue"
        });

        render(
            <Router>
                <AuthProvider>
                    <ErrorProvider>
                        <DataProvider>
                            <GeneralDashboardPage />;
                        </DataProvider>
                    </ErrorProvider>
                </AuthProvider>
            </Router>
        );

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
        });

        // Verify organization of elements/components
        expect(screen.queryByTestId("dashboard-content")).hasChildNodes;
        expect(screen.queryByTestId("queue-container")).hasChildNodes;
        expect(screen.queryByTestId("column-metrics")).hasChildNodes;
        expect(screen.queryByTestId("metrics-container")).hasChildNodes;
        expect(screen.queryByTestId("column-insights")).hasChildNodes;
        expect(screen.queryByTestId("insights-container")).hasChildNodes;

        // View agents in the queue
        fireEvent.click(screen.getByTestId("btn-insight-card"));
        expect(screen.queryByTestId("btn-insight-card")?.getAttribute("func")).toHaveBeenCalled();

        // Graph in metric details
        expect(screen.queryByTestId("graph-container"));

    });
});
