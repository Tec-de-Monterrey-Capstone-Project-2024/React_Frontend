import React, { useState } from 'react';
import { AlertFormData, MetricOption } from './types';
import { ContentCard } from '../../Cards/ContentCard';
import { Button } from '../../Button';
import { Select } from '../../Select';
import './styles.css';

const AddAlert: React.FC = () => {
    const [formData, setFormData] = useState<AlertFormData>({
        metric: '',
        minThreshold: '',
        maxThreshold: '',
        targetValue: ''
    });

    const metrics: MetricOption[] = [
        { value: 'cpu', label: 'CPU Usage' }, 
        { value: 'memory', label: 'Memory Usage' }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <ContentCard>
            <div className='alert-form'>
                <h1 className="form-title">Add Alert</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Choose metric
                        <Select
                            values={metrics.map(metric => metric.value)}
                            placeholder="Select a metric"
                            color="gray" 
                        />
                    </label>
                    <label>
                        Minimum Threshold
                        <Select
                            placeholder="Enter minimum threshold"
                            color="gray" 
                        />
                    </label>
                    <label>
                        Maximum Threshold
                        <Select
                            placeholder="Enter maximum threshold"
                            color="gray" 
                        />
                    </label>
                    <label>
                        Target Value
                        <Select
                            placeholder="Target Value"
                            color="gray" 
                        />
                    </label>
                    <Button
                        type="submit"
                        variant="green"
                        title="Save Alert" onClick={function (): void {
                            throw new Error('Function not implemented.');
                        } }                    >
                        Save
                    </Button>
                </form>
            </div>
        </ContentCard>
    );
};

export default AddAlert;
