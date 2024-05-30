import React, { useState } from 'react';
import axios from 'axios';
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

    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const metrics: MetricOption[] = [
        { value: 'SERVICE_LEVEL', label: 'Service Level' },
        { value: 'ABANDONMENT_RATE', label: 'Abandonment Rate' },
        { value: 'AVERAGE_SPEED_ANSWER', label: 'Average Speed Answer' },
        { value: 'AVERAGE_HANDLE_TIME', label: 'Average Handle Time' },
        { value: 'OCCUPANCY', label: 'Occupancy' },
        { value: 'FIRST_CONTACT_RESOLUTION', label: 'First Contact Resolution' },
        { value: 'AGENT_SCHEDULE_ADHERENCE', label: 'Agent Schedule Adherence' },
        { value: 'AVERAGE_AFTER_CONTACT_WORK_TIME', label: 'Average After Contact Work Time' },
        { value: 'AVERAGE_QUEUE_ANSWER_TIME', label: 'Average Queue Answer Time' }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        setIsButtonPressed(true);
        try {
            const response = await axios.post(`http://localhost:8080/api/metrics/${formData.metric}/setThresholdsAndTarget`, null, {
                params: {
                    minThreshold: formData.minThreshold || null,
                    maxThreshold: formData.maxThreshold || null,
                    targetValue: formData.targetValue || null
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        } finally {
            setIsButtonPressed(false);
        }
    };

    return (
        <ContentCard>
            <div className='alert-form'>
                <h1 className="form-title">Add Alert</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>
                            Choose metric
                            <select name="metric" value={formData.metric} onChange={handleChange} className="form-control">
                                <option value="">Select a metric</option>
                                {metrics.map(metric => (
                                    <option key={metric.value} value={metric.value}>
                                        {metric.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Minimum Threshold
                            <input
                                type="number"
                                name="minThreshold"
                                placeholder="Enter minimum threshold"
                                value={formData.minThreshold}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Maximum Threshold
                            <input
                                type="number"
                                name="maxThreshold"
                                placeholder="Enter maximum threshold"
                                value={formData.maxThreshold}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Target Value
                            <input
                                type="number"
                                name="targetValue"
                                placeholder="Target Value"
                                value={formData.targetValue}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </label>
                    </div>
                    <button 
                        type="button" 
                        onClick={handleSubmit} 
                        className={`form-control alert-form-button button ${isButtonPressed ? 'pressed' : ''}`}
                        onMouseDown={() => setIsButtonPressed(true)}
                        onMouseUp={() => setIsButtonPressed(false)}
                    >
                        Save Alert
                    </button>
                </form>
            </div>
        </ContentCard>
    );
};

export default AddAlert;
