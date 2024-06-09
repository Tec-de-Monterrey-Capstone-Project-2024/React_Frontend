import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Popup from '../Popup'; // Adjust the import path if needed

describe('Popup Component', () => {
  const onCloseMock = jest.fn();
  const setAlertsMock = jest.fn();
  const alerts = [
    { id: 1, metricName: 'Alert 1' },
    { id: 2, metricName: 'Alert 2' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('should not render when isVisible is false', () => {
    render(<Popup isVisible={false} onClose={onCloseMock} alerts={alerts} setAlerts={setAlertsMock} />);
    expect(screen.queryByText('Alerts')).toBeNull();
  });

  test('should render correctly when isVisible is true', () => {
    render(<Popup isVisible={true} onClose={onCloseMock} alerts={alerts} setAlerts={setAlertsMock} />);
    expect(screen.getByText('Alerts')).not.toBeNull();
    expect(screen.getByText('Alert 1')).not.toBeNull();
    expect(screen.getByText('Alert 2')).not.toBeNull();
  });

  test('should display "No alerts" when there are no alerts', () => {
    render(<Popup isVisible={true} onClose={onCloseMock} alerts={[]} setAlerts={setAlertsMock} />);
    expect(screen.getByText('No alerts')).not.toBeNull();
  });

  test('should dismiss alert when dismiss button is clicked', () => {
    render(<Popup isVisible={true} onClose={onCloseMock} alerts={alerts} setAlerts={setAlertsMock} />);
    const dismissButtons = screen.getAllByText('Dismiss');
    fireEvent.click(dismissButtons[0]);
    expect(setAlertsMock).toHaveBeenCalledWith([{ id: 2, metricName: 'Alert 2' }]);
    expect(localStorage.getItem('dismissedAlerts')).toBe(JSON.stringify([1]));
  });
});
