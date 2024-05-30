import React from 'react';
import { PerformanceCategory, IPerformanceTagProps } from './types';

// Define a color map to style the tags based on severity
const colorMap: Record<PerformanceCategory, string> = {
  critical: 'bg-red-200 text-red-800', // Use correct bg color classes
  unsatisfactory: 'bg-red-200 text-red-600',
  below_expectations: 'bg-yellow-200 text-yellow-600',
  exceeds_expectations: 'bg-green-200 text-green-600',
  outstanding: 'bg-green-200 text-green-800',
  pioneering: 'bg-blue-200 text-blue-500'
};

const PerformanceTag: React.FC<IPerformanceTagProps> = ({ severity }) => {
  // Convert severity from snake_case to Normal Case
  const formattedSeverity = severity.replace(/_/g, ' ')
                                     .split(' ')
                                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                     .join(' ');

  const color = colorMap[severity];
  
  return (
    <span className={`px-4 py-2 rounded-lg text-sm font-bold ${color} inline-block leading-normal`}>
      {formattedSeverity}
    </span>
  );
};

export default PerformanceTag;
