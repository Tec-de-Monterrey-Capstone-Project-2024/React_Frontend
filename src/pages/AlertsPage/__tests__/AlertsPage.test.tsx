import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AlertsPage from '../AlertsPage';
import { ROUTES } from '../../../ROUTES';

// Mock the components and hooks from react-router-dom
jest.mock('../../components/Tables/AlertTable', () => () => <div data-testid="alerts-table" />);
jest.mock('../../components/Button', () => ({
  Button: ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <button onClick={onClick} data-testid="add-alert-button">
      {children}
    </button>
  ),
}));

// Mock useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('AlertsPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders AlertsTable and Add Alert button', () => {
    render(
      <Router>
        <AlertsPage />
      </Router>
    );

    expect(screen.getByTestId('alerts-table')).toBeInTheDocument();
    expect(screen.getByTestId('add-alert-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-alert-button')).toHaveTextContent('Add Alert');
  });

  test('navigates to add alert page on button click', () => {
    render(
      <Router>
        <AlertsPage />
      </Router>
    );

    fireEvent.click(screen.getByTestId('add-alert-button'));
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.ADD_ALERT);
  });
});
