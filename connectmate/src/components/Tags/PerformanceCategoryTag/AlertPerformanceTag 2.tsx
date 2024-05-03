import React from 'react';
import {  PerformanceCategory, IPerformanceTagProps } from './types';

const colorMap: Record<PerformanceCategory, string> = {
  critical: 'bg-gray-200 text-red-800', // bg-red-600
  unsatisfactory: 'bg-gray-200 text-red-600', // bg-red-500
  below_expectations: 'bg-gray-200 text-yellow-600', // bg-yellow-400
  exceeds_expectations: 'bg-gray-200 text-green-600', // bg-green-400
  outstanding: 'bg-gray-200 text-green-800', // bg-green-500
  pioneering: 'bg-gray-200 text-blue-500'  // bg-blue-600
};

const PerformanceTag: React.FC<IPerformanceTagProps> = ({ severity }) => {
   // Convert severity from snake_case to Normal Case
   const formattedSeverity = severity.replace(/_/g, ' ')
                                     .split(' ')
                                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                     .join(' ');

  const color = colorMap[severity]; 
  return (
    <span className={`px-4 py-2 rounded-lg text-csm font-bold ${color} inline-block leading-normal`}>
      {formattedSeverity}
    </span>
  );
}

export default PerformanceTag;
