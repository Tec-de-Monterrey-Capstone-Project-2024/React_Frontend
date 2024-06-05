import GeneralDashboardPage from "../GeneralDashboardPage";
import { getQueueCounts } from "../../../services/queues/getQueueCounts";

import { DataProvider, useDataContext } from "../../../context/DataContext";
import { AuthProvider } from "../../../context/AuthContext";
import { ErrorProvider } from "../../../context/ErrorContext";
import { mockUserResults } from "../../../context/_mocks_/userResults";

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate, useNavigation } from "react-router-dom";
import React from "react";

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

        expect(screen.queryByTestId("dashboard-content")).hasChildNodes;
        expect(screen.queryByTestId("queue-container")).not.toBeInTheDocument();
        expect(screen.queryByTestId("column-metrics")?.hasChildNodes);
        expect(screen.queryByTestId("metrics-container")).hasChildNodes;
        expect(screen.queryByTestId("column-insights")).hasChildNodes;
        expect(screen.queryByTestId("insights-container")).hasChildNodes;

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
            expect(getQueueCounts).toHaveBeenCalled();
        });

        expect(screen.queryByTestId("dashboard-content")).hasChildNodes;
        expect(screen.queryByTestId("queue-container")).hasChildNodes;
        expect(screen.queryByTestId("column-metrics")).hasChildNodes;
        expect(screen.queryByTestId("metrics-container")).hasChildNodes;
        expect(screen.queryByTestId("column-insights")).hasChildNodes;
        expect(screen.queryByTestId("insights-container")).hasChildNodes;

        fireEvent.click(screen.getByTestId("insight-card-button"));
        expect(screen.queryByTestId("insight-card-button")?.getAttribute("func")).toHaveBeenCalled();

        expect(screen.queryByTestId("graph-container"));

    });
});
