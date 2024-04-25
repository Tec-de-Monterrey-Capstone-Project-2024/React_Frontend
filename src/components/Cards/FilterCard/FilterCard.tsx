import React from 'react';
import './FilterCard.css';
import { FilterCardProps } from './types'; // Importing types

const defaultPriorityOptions = [
    { name: 'Urgent', color: 'bg-red-200' },
    { name: 'Moderate', color: 'bg-yellow-200' },
    { name: 'Low', color: 'bg-green-200' },
];

const defaultKpiOptions = [
    'Service Level',
    'Abandoned calls percentage',
    'First Call Resolutions',
    'Occupancy',
    'Schedule Adherence',
    'Average Speed of Answer',
];

const FilterCard: React.FC<FilterCardProps> = ({
                                                   priorityOptions = defaultPriorityOptions,
                                                   kpiOptions = defaultKpiOptions
                                               }) => {
    return (
        <div>
            {/* Priority Filter */}
            <div className="p-4 bg-white rounded shadow">
                <h3 className="font-semibold mb-2">Priority</h3>
                {priorityOptions.map((option) => (
                    <div key={option.name} className={`p-2 rounded ${option.color} mb-1`}>
                        {option.name}
                    </div>
                ))}
            </div>
            {/* KPI Filter */}
            <div className="mt-4 p-4 bg-white rounded shadow">
                <h3 className="font-semibold mb-2">KPIs</h3>
                {kpiOptions.map((kpi) => (
                    <div key={kpi} className="p-2 rounded bg-green-200 mb-1">
                        {kpi}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterCard;
