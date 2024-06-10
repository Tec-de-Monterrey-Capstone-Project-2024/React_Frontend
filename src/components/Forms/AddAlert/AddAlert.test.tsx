import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddAlert from './AddAlert';
import axios from 'axios';

jest.mock('axios');
const mockGet = axios.get as jest.Mock;
const mockPost = axios.post as jest.Mock;

describe('Tests for AddAlert Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('The AddAlert component renders correctly', () => {
    render(<AddAlert />);

    // Verify that the form elements are present
    expect(screen.getByText('Add Alert')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose metric')).toBeInTheDocument();
    expect(screen.getByLabelText('Minimum Threshold')).toBeInTheDocument();
    expect(screen.getByLabelText('Maximum Threshold')).toBeInTheDocument();
    expect(screen.getByLabelText('Target Value')).toBeInTheDocument();
    expect(screen.getByText('Save Alert')).toBeInTheDocument();
    expect(screen.getByText('Clear Values')).toBeInTheDocument();
  });

  test('The AddAlert component fetches metric info on metric change', async () => {
    const metricData = {
      minimumThresholdValue: '5',
      maximumThresholdValue: '10',
      targetValue: '7'
    };

    mockGet.mockResolvedValueOnce({ data: metricData });

    render(<AddAlert />);

    fireEvent.change(screen.getByLabelText('Choose metric'), { target: { value: 'SERVICE_LEVEL' } });

    await waitFor(() => {
      expect(mockGet).toHaveBeenCalledWith('https://connectmate-f72xn3ewaa-uc.a.run.app/api/metrics/SERVICE_LEVEL');
      expect(screen.getByLabelText('Minimum Threshold')).toHaveValue(5);
      expect(screen.getByLabelText('Maximum Threshold')).toHaveValue(10);
      expect(screen.getByLabelText('Target Value')).toHaveValue(7);
    });
  });

  test('The AddAlert component handles metric info fetch errors', async () => {
    mockGet.mockRejectedValueOnce(new Error('Failed to fetch metric info'));

    render(<AddAlert />);

    fireEvent.change(screen.getByLabelText('Choose metric'), { target: { value: 'SERVICE_LEVEL' } });

    await waitFor(() => {
      expect(mockGet).toHaveBeenCalledWith('https://connectmate-f72xn3ewaa-uc.a.run.app/api/metrics/SERVICE_LEVEL');
      expect(screen.getByText('Failed to fetch metric info')).toBeInTheDocument();
    });
  });

  test('The AddAlert component handles form submission', async () => {
    mockPost.mockResolvedValueOnce({ data: 'Success' });

    render(<AddAlert />);

    fireEvent.change(screen.getByLabelText('Choose metric'), { target: { value: 'SERVICE_LEVEL' } });
    fireEvent.change(screen.getByLabelText('Minimum Threshold'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('Maximum Threshold'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('Target Value'), { target: { value: '7' } });

    fireEvent.click(screen.getByText('Save Alert'));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith('https://connectmate-f72xn3ewaa-uc.a.run.app/api/metrics/SERVICE_LEVEL/setThresholdsAndTarget', null, {
        params: {
          minThreshold: '5',
          maxThreshold: '10',
          targetValue: '7'
        }
      });
    });
  });

  test('The AddAlert component handles form submission errors', async () => {
    mockPost.mockRejectedValueOnce(new Error('Failed to submit form'));

    render(<AddAlert />);

    fireEvent.change(screen.getByLabelText('Choose metric'), { target: { value: 'SERVICE_LEVEL' } });
    fireEvent.change(screen.getByLabelText('Minimum Threshold'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('Maximum Threshold'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('Target Value'), { target: { value: '7' } });

    fireEvent.click(screen.getByText('Save Alert'));

    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith('https://connectmate-f72xn3ewaa-uc.a.run.app/api/metrics/SERVICE_LEVEL/setThresholdsAndTarget', null, {
        params: {
          minThreshold: '5',
          maxThreshold: '10',
          targetValue: '7'
        }
      });
      expect(screen.getByText('Failed to submit form')).toBeInTheDocument();
    });
  });

  test('The AddAlert component clears form values', async () => {
    render(<AddAlert />);

    fireEvent.change(screen.getByLabelText('Choose metric'), { target: { value: 'SERVICE_LEVEL' } });
    fireEvent.change(screen.getByLabelText('Minimum Threshold'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('Maximum Threshold'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('Target Value'), { target: { value: '7' } });

    fireEvent.click(screen.getByText('Clear Values'));

    await waitFor(() => {
      expect(screen.getByLabelText('Minimum Threshold')).toHaveValue(null);
      expect(screen.getByLabelText('Maximum Threshold')).toHaveValue(null);
      expect(screen.getByLabelText('Target Value')).toHaveValue(null);
    });
  });
});
