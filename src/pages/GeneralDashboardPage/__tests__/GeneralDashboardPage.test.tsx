import React from 'react';
import { render, screen, cleanup, waitFor, act, fireEvent } from '@testing-library/react';
import GeneralDashboardPage from '../GeneralDashboardPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider, useDataContext } from '../../../context/DataContext';
import { AuthProvider } from '../../../context/AuthContext';
import { ErrorProvider } from '../../../context/ErrorContext';
import { getQueueCounts } from '../../../services/queues/getQueueCounts';
import { describeQueue } from '../../../services/queues/describeQueue';
import { getQueueMetrics } from '../../../services/metrics/getQueueMetrics';
import { getQueueInsights } from '../../../services/insights/getQueueInsights';

jest.mock('../../../services/queues/getQueueCounts');
jest.mock('../../../services/queues/describeQueue');
jest.mock('../../../services/metrics/getQueueMetrics');
jest.mock('../../../services/insights/getQueueInsights');
jest.mock('../../../context/DataContext.tsx');

jest.mock('../../../config/MetricsData', () => ({
    metric1: { name: 'Metric 1', min: 0, max: 100, unit: 'units', positive_upside: true },
    metric2: { name: 'Metric 2', min: 0, max: 200, unit: 'units', positive_upside: false },
}));

afterEach(() => {
    cleanup();
    jest.resetAllMocks();
});

/*
Me encargué de hacer que la lógica sea más parecida a la logica de Abi e intente implementar el test
The general dashboard page renders successfully for a specific queue
pero si no seguia con logica para intentar avanzarle sentia que me iba a quedarme atorado, espero me puedas ayudar a resolver unos tests que no me salen
plis tqm
 */


describe("General Dashboard Page", () => {
    const instanceId = "7c78bd60-4a9f-40e5-b461-b7a0dfaad848";
    const queueId = "f0813607-af92-4a36-91e6-630ababb643c";
    const arn = "arn:aws:connect:us-west-2:123456789012:instance/7c78bd60-4a9f-40e5-b461-b7a0dfaad848";

    beforeEach(() => {
        getQueueCounts.mockResolvedValue({ data: [{ contacts: 5, agents: 10, color: "green" }] });
        describeQueue.mockResolvedValue({ data: [{ id: queueId, name: "Test Queue" }] });
        getQueueMetrics.mockResolvedValue({
            status: 200,
            data: {
                metric1: 100,
                metric2: 200
            }
        });
        getQueueInsights.mockResolvedValue({
            data: [
                { id: "1", insightName: "Insight 1", insightSummary: "Summary 1", insightSeverity: "low" },
                { id: "2", insightName: "Insight 2", insightSummary: "Summary 2", insightSeverity: "high" }
            ]
        });
    });

    test("The general dashboard page renders successfully for all queues", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            user: { instanceId },
            arn,
            selectedQueueId: "all"
        });

        await act(async () => {
            render(
                <Router>
                    <GeneralDashboardPage />
                </Router>
            );
        });

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
        });

        expect(screen.queryByTestId("dashboard-content")).toBeInTheDocument();
        expect(screen.queryByTestId("queue-container")).not.toBeInTheDocument();
        expect(screen.queryByTestId("column-metrics")).toBeInTheDocument();
        expect(screen.queryByTestId("metrics-container")).toBeInTheDocument();
        expect(screen.queryByTestId("column-insights")).toBeInTheDocument();
        expect(screen.queryByTestId("insights-container")).toBeInTheDocument();
    });

    test("The general dashboard page renders successfully for a specific queue", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            user: { instanceId },
            arn,
            selectedQueueId: "BasicQueue"
        });

        await act(async () => {
            render(
                <Router>
                    <AuthProvider>
                        <ErrorProvider>
                            <DataProvider>
                                <GeneralDashboardPage />
                            </DataProvider>
                        </ErrorProvider>
                    </AuthProvider>
                </Router>
            );
        });

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
        });

        expect(screen.queryByTestId("dashboard-content")).toBeInTheDocument();
        expect(screen.queryByTestId("queue-container")).toBeInTheDocument();
        expect(screen.queryByTestId("column-metrics")).toBeInTheDocument();
        expect(screen.queryByTestId("metrics-container")).toBeInTheDocument();
        expect(screen.queryByTestId("column-insights")).toBeInTheDocument();
        expect(screen.queryByTestId("insights-container")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("btn-insight-card"));
    });

    test("The GeneralDashboardPage renders queue card correctly when selectedQueueId is not 'all'", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            user: { instanceId },
            arn,
            selectedQueueId: queueId
        });

        await act(async () => {
            render(
                <Router>
                    <DataProvider>
                        <GeneralDashboardPage />
                    </DataProvider>
                </Router>
            );
        });

        expect(await screen.findByTestId("queue-card")).toBeInTheDocument();
        expect(await screen.findByText("Test Queue")).toBeInTheDocument();
        expect(await screen.findByText("Clients: 5")).toBeInTheDocument();
        expect(await screen.findByText("Agents: 10")).toBeInTheDocument();
    });

    test("The GeneralDashboardPage renders metrics correctly", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            user: { instanceId },
            arn,
            selectedQueueId: queueId
        });

        await act(async () => {
            render(
                <Router>
                    <DataProvider>
                        <GeneralDashboardPage />
                    </DataProvider>
                </Router>
            );
        });

        expect(await screen.findByTestId('column-metrics')).toBeInTheDocument();
        expect(await screen.findByText('KPIs')).toBeInTheDocument();
        expect(await screen.findByText('Metric 1')).toBeInTheDocument();
        expect(await screen.findByText('Metric 2')).toBeInTheDocument();
    });

    test("The GeneralDashboardPage renders insights correctly", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            user: { instanceId },
            arn,
            selectedQueueId: queueId
        });

        await act(async () => {
            render(
                <Router>
                    <DataProvider>
                        <GeneralDashboardPage />
                    </DataProvider>
                </Router>
            );
        });

        expect(await screen.findByTestId('column-insights')).toBeInTheDocument();
        expect(await screen.findByText('Insights')).toBeInTheDocument();
        expect(await screen.findByText('Insight 1')).toBeInTheDocument();
        expect(await screen.findByText('Summary 1')).toBeInTheDocument();
        expect(await screen.findByText('Insight 2')).toBeInTheDocument();
        expect(await screen.findByText('Summary 2')).toBeInTheDocument();
    });

    test("The GeneralDashboardPage does not render queue card when selectedQueueId is 'all'", async () => {
        (useDataContext as jest.Mock).mockReturnValue({
            user: { instanceId },
            arn,
            selectedQueueId: 'all'
        });

        await act(async () => {
            render(
                <Router>
                    <DataProvider>
                        <GeneralDashboardPage />
                    </DataProvider>
                </Router>
            );
        });

        expect(screen.queryByTestId("queue-card")).not.toBeInTheDocument();
    });

    test("The GeneralDashboardPage displays 'No metrics found' when no metrics are available", async () => {
        getQueueMetrics.mockResolvedValueOnce({
            status: 200,
            data: {}
        });

        (useDataContext as jest.Mock).mockReturnValue({
            user: { instanceId },
            arn,
            selectedQueueId: queueId
        });

        await act(async () => {
            render(
                <Router>
                    <DataProvider>
                        <GeneralDashboardPage />
                    </DataProvider>
                </Router>
            );
        });

        expect(await screen.findByText('No metrics found')).toBeInTheDocument();
    });

    test("The GeneralDashboardPage displays 'No insights found.' when no insights are available", async () => {
        getQueueInsights.mockResolvedValueOnce({
            data: []
        });

        (useDataContext as jest.Mock).mockReturnValue({
            user: { instanceId },
            arn,
            selectedQueueId: queueId
        });

        await act(async () => {
            render(
                <Router>
                    <DataProvider>
                        <GeneralDashboardPage />
                    </DataProvider>
                </Router>
            );
        });

        expect(await screen.findByText('No insights found.')).toBeInTheDocument();
    });
});






/*

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



*/
