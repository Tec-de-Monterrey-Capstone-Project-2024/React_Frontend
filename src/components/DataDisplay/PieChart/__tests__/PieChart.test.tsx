import React from 'react';
import { render } from '@testing-library/react';
import Pie from '../PieChart';

jest.mock('@mui/x-charts/PieChart', () => {
  const MockPieChart = jest.fn();
  MockPieChart.mockReturnValue(null); 
  return { PieChart: MockPieChart };
});

describe('Pie component', () => {
  test('renders the PieChart with the correct series data', () => {
    const value = 40;
    const metric = 'Test Metric';
    const remainingValue = 100 - value;

    render(<Pie value={value} metric={metric} />);

    const expectedSeries = [
      {
        data: [
          { value, label: `${metric} (${value}%)`, color: '#3a83c8' },
          { value: remainingValue, label: `Remaining (${remainingValue}%)`, color: '#a1c14f' },
        ],
      },
    ];

    const { PieChart } = require('@mui/x-charts/PieChart');

    expect(PieChart).toHaveBeenCalledWith(
      expect.objectContaining({
        series: expectedSeries,
        width: 520,
        height: 260,
      }),
      {}
    );
  });
});