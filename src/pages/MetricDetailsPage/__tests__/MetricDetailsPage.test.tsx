import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { cleanup, render, screen } from "@testing-library/react";
import { useParams } from 'react-router-dom';
import MetricDetailsPage from "../MetricDetailsPage";
import MetricsData from '../../../config/MetricsData';
import { ContentCard } from '../../../components/Cards/ContentCard';
import { Pie } from '../../../components/DataDisplay/PieChart';
import { GaugeChart } from '../../../components/DataDisplay/GaugeChart';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../../../components/Cards/ContentCard', () => ({
  ContentCard: jest.fn(({ children }) => <div data-testid="content-card">{children}</div>)
}));

jest.mock('../../../components/DataDisplay/PieChart', () => ({
  Pie: jest.fn(({ value, metric }) => <div data-testid="pie-chart">{`Pie Chart: ${value}, ${metric}`}</div>)
}));

jest.mock('../../../components/DataDisplay/GaugeChart', () => ({
  GaugeChart: jest.fn(({ min, max, value }) => <div data-testid="gauge-chart">{`Gauge Chart: ${min}, ${max}, ${value}`}</div>)
}));

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe("Metric Details Page", () => {
  const mockMetricInfoCode = "serviceLevel";
  const mockValue = "75";

  test("renders Metric Details Page with Pie Chart", () => {
    (useParams as jest.Mock).mockReturnValue({ metric_info_code: mockMetricInfoCode, value: mockValue });

    render(
      <Router>
        <Routes>
          <Route path="/" element={<MetricDetailsPage />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('Metric Details')).toBeInTheDocument();
    expect(screen.getByText(`${MetricsData[mockMetricInfoCode].name} (${mockMetricInfoCode})`)).toBeInTheDocument();
    expect(screen.getByTestId("content-card")).toBeInTheDocument();
    expect(screen.getByTestId("pie-chart")).toBeInTheDocument();
  });

  test("renders Metric Details Page with Gauge Chart", () => {
    const gaugeMetricInfoCode = "avgQueueAnswerTime";
    (useParams as jest.Mock).mockReturnValue({ metric_info_code: gaugeMetricInfoCode, value: mockValue });

    render(
      <Router>
        <Routes>
          <Route path="/" element={<MetricDetailsPage />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('Metric Details')).toBeInTheDocument();
    expect(screen.getByText(`${MetricsData[gaugeMetricInfoCode].name} (${gaugeMetricInfoCode})`)).toBeInTheDocument();
    expect(screen.getByTestId("content-card")).toBeInTheDocument();
    expect(screen.getByTestId("gauge-chart")).toBeInTheDocument();
  });

  test("renders Metric not found if metric_info_code is invalid", () => {
    (useParams as jest.Mock).mockReturnValue({ metric_info_code: "invalidMetric", value: mockValue });

    render(
      <Router>
        <Routes>
          <Route path="/" element={<MetricDetailsPage />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('Metric not found')).toBeInTheDocument();
  });

  test("renders Metric not found if value is missing", () => {
    (useParams as jest.Mock).mockReturnValue({ metric_info_code: mockMetricInfoCode, value: "" });

    render(
      <Router>
        <Routes>
          <Route path="/" element={<MetricDetailsPage />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('Metric not found')).toBeInTheDocument();
  });
});
