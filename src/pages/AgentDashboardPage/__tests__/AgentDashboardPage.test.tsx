import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { useParams } from 'react-router-dom';

import { useDataContext } from '../../../context/DataContext';
import { getAgentMetrics } from '../../../services/metrics/getAgentMetrics';
import { getAgentInsights } from '../../../services/insights/getAgentInsights';
import { mockAgentMetrics } from "../../../services/__mocks__/mockAgentMetrics";
import { mockAgentInsights } from "../../../services/__mocks__/mockAgentInsights";

import MetricsData from '../../../config/MetricsData';

import AgentDashboardPage from "../AgentDashboardPage";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

jest.mock('../../../context/DataContext');
jest.mock('../../../services/metrics/getAgentMetrics');
jest.mock('../../../services/insights/getAgentInsights');

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe("Agent Dashboard Page", () => {
  test("renders agent metrics and insights correctly", async () => {
    
    (useParams as jest.Mock).mockReturnValue({ agentId: '123' });
    (useDataContext as jest.Mock).mockReturnValue({ arn: 'mockArn' });
    (getAgentMetrics as jest.Mock).mockResolvedValue({ status: 200, data: mockAgentMetrics });
    (getAgentInsights as jest.Mock).mockResolvedValue({ status: 200, data: mockAgentInsights });

    render(
      <Router>
        <AgentDashboardPage />
      </Router>
    );

    await waitFor(() => {
      expect(getAgentMetrics).toHaveBeenCalledWith('mockArn', '123');
      expect(getAgentInsights).toHaveBeenCalledWith('123');
    });

    await waitFor(() => {
      expect(screen.queryByTestId('txt-metric-loading')).not.toBeInTheDocument();
    });

    Object.entries(mockAgentMetrics).forEach(([metric_info_code, value]) => {
      const metricData = MetricsData[metric_info_code];
      if (metricData) {
        const { name, unit } = metricData;
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByText(`${value}${unit}`)).toBeInTheDocument();
      }
    });

    mockAgentInsights.forEach(insight => {
      expect(screen.getByText(insight.insightName)).toBeInTheDocument();
      expect(screen.getByText(insight.insightSummary)).toBeInTheDocument();
    });
  });

  test("shows loading state initially", async () => {
    (useParams as jest.Mock).mockReturnValue({ agentId: '123' });
    (useDataContext as jest.Mock).mockReturnValue({ arn: 'mockArn' });
    (getAgentMetrics as jest.Mock).mockResolvedValue({ status: 200, data: mockAgentMetrics });
    (getAgentInsights as jest.Mock).mockResolvedValue({ status: 200, data: mockAgentInsights });

    render(
      <Router>
        <AgentDashboardPage />
      </Router>
    );

    await waitFor(() => {
      expect(getAgentMetrics).toHaveBeenCalledWith('mockArn', '123');
      expect(getAgentInsights).toHaveBeenCalledWith('123');
    });

    expect(screen.queryByTestId('txt-metric-loading')).toBeInTheDocument();
    expect(screen.queryByTestId('txt-insight-loading')).toBeInTheDocument();
  });

  test("shows no metrics found when there are no metrics and shows no insights found when there are no insights", async () => {
    (useParams as jest.Mock).mockReturnValue({ agentId: '123' });
    (useDataContext as jest.Mock).mockReturnValue({ arn: 'mockArn' });
    (getAgentMetrics as jest.Mock).mockResolvedValue({ status: 200, data: {} });
    (getAgentInsights as jest.Mock).mockResolvedValue({ status: 200, data: [] });

    render(
      <Router>
        <AgentDashboardPage />
      </Router>
    );

    await waitFor(() => {
      expect(getAgentMetrics).toHaveBeenCalledWith('mockArn', '123');
      expect(screen.getByText('No metrics found')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(getAgentInsights).toHaveBeenCalledWith('123');
      expect(screen.getByText('No insights found')).toBeInTheDocument();
    });

  });
});
