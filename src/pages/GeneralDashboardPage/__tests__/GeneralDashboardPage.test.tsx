import GeneralDashboardPage from "../GeneralDashboardPage";

import { useDataContext } from "../../../context/DataContext";
import { mockMetricsResults } from "../../../context/_mocks_/metricResults";
import { mockInsightsResults } from "../../../context/_mocks_/insightResults";

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

jest.mock("../../../context/DataContext.tsx");

afterEach(() => {
    cleanup();
    jest.resetAllMocks();
})

describe("General Dashboard Page", () => {
    test("The general dashboard page renders successfully with data for all queues", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            metrics: mockMetricsResults,
            insights: mockInsightsResults
        });

        render(
            <Router>
                <GeneralDashboardPage />;
            </Router>
        );

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
        });

        expect(screen.queryByTestId("dashboard-content")).hasChildNodes();
        expect(screen.queryByTestId("queue-container")).not.toBeInTheDocument();
        expect(screen.queryByTestId("column-metrics")).hasChildNodes();
        expect(screen.queryByTestId("metrics-container")).hasChildNodes();
        expect(screen.queryByTestId("column-insights")).hasChildNodes();
        expect(screen.queryByTestId("insights-container")).hasChildNodes();
        expect(screen.queryByTestId("metrics-container")).toBeInTheDocument();
        expect(screen.queryByTestId("insights-container")).toBeInTheDocument();
    });

    test("The general dashboard page renders successfully without data for all queues", async () => {
        render(
            <Router>
                <GeneralDashboardPage />;
            </Router>
        );

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
        });

        expect(screen.queryByTestId("dashboard-content")).hasChildNodes();
        expect(screen.queryByTestId("queue-container")).not.toBeInTheDocument();
    });
});
