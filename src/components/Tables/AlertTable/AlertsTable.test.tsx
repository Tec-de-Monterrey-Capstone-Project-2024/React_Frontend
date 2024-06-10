import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AlertsTable from './AlertsTable';
import { getAlerts } from '../../../services/alerts/getAlerts';

// Mock the getAlerts service
jest.mock('../../../services/alerts/getAlerts');

const mockAlerts = [
  {
    id: 1,
    metricName: 'Service Level',
    insightCategory: 'below_expectations',
    connectItemType: 'instance',
    occurredAt: new Date().toISOString(),
  },
  {
    id: 2,
    metricName: 'Occupancy',
    insightCategory: 'exceeds_expectations',
    connectItemType: 'queue',
    occurredAt: new Date().toISOString(),
  },
  {
    id: 3,
    metricName: 'Abandonment Rate',
    insightCategory: 'outstanding',
    connectItemType: 'agent',
    occurredAt: new Date().toISOString(),
  },
];

describe('Tests for AlertsTable Component', () => {
  beforeEach(() => {
    (getAlerts as jest.Mock).mockResolvedValue(mockAlerts);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('The AlertsTable component renders correctly', async () => {
    render(
      <Router>
        <AlertsTable />
      </Router>
    );

    // Check that the loading message is displayed initially
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the data to be loaded and rendered
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    // Verify that the table headers are present
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Affected KPI')).toBeInTheDocument();
    expect(screen.getByText('Performance Category')).toBeInTheDocument();
    expect(screen.getByText('Scope')).toBeInTheDocument();
    expect(screen.getByText('Event Date')).toBeInTheDocument();
    expect(screen.getByText('Insights')).toBeInTheDocument();

    // Verify that the alerts are displayed correctly
    expect(screen.getByText('Service Level')).toBeInTheDocument();
    expect(screen.getByText('Occupancy')).toBeInTheDocument();
    expect(screen.getByText('Abandonment Rate')).toBeInTheDocument();
    expect(screen.getByText('Below Expectations')).toBeInTheDocument();
    expect(screen.getByText('Exceeds Expectations')).toBeInTheDocument();
    expect(screen.getByText('Outstanding')).toBeInTheDocument();

    // Verify that the Show more buttons are present
    expect(screen.getAllByText('Show more')).toHaveLength(3);
  });

  test('The AlertsTable component handles errors correctly', async () => {
    (getAlerts as jest.Mock).mockRejectedValue(new Error('Failed to fetch alerts.'));

    render(
      <Router>
        <AlertsTable />
      </Router>
    );

    // Wait for the error message to be displayed
    await waitFor(() => expect(screen.getByText('Failed to fetch alerts.')).toBeInTheDocument());
  });
});
