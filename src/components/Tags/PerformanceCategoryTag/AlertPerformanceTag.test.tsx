import React from 'react';
import { render, screen } from '@testing-library/react';
import PerformanceTag from './AlertPerformanceTag';
import { PerformanceCategory } from './types';

// Define mock props for the component
const mockProps: { severity: PerformanceCategory }[] = [
  { severity: 'critical' },
  { severity: 'unsatisfactory' },
  { severity: 'below_expectations' },
  { severity: 'exceeds_expectations' },
  { severity: 'outstanding' },
  { severity: 'pioneering' },
];

describe('PerformanceTag Component', () => {
  test.each(mockProps)('renders correctly with severity: %s', ({ severity }) => {
    render(<PerformanceTag severity={severity} />);

    // Convert severity from snake_case to Normal Case
    const formattedSeverity = severity.replace(/_/g, ' ')
                                      .split(' ')
                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                      .join(' ');

    const colorMap: Record<PerformanceCategory, string> = {
      critical: 'bg-red-200 text-red-800',
      unsatisfactory: 'bg-red-200 text-red-600',
      below_expectations: 'bg-yellow-200 text-yellow-600',
      exceeds_expectations: 'bg-green-200 text-green-600',
      outstanding: 'bg-green-200 text-green-800',
      pioneering: 'bg-blue-200 text-blue-500'
    };

    const colorClass = colorMap[severity];

    // Verify the text content
    expect(screen.getByText(formattedSeverity)).toBeInTheDocument();

    // Verify the class name
    expect(screen.getByText(formattedSeverity)).toHaveClass(colorClass);
  });
});
