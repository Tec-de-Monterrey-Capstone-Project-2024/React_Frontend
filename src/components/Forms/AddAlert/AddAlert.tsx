import React, { useState } from 'react';
import axios from 'axios';
import { AlertFormData, MetricOption } from './types';
import { ContentCard } from '../../Cards/ContentCard';
import './styles.css';
import config from "../../../config";

const AddAlert: React.FC = () => {
    const [formData, setFormData] = useState<AlertFormData>({
        metric: '',
        minThreshold: '',
        maxThreshold: '',
        targetValue: ''
    });

    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
        if (name === 'metric' && value) {
            fetchMetricInfo(value);
        }
    };

    const fetchMetricInfo = async (metricCode: string) => {
        try {
            const response = await axios.get(`${config.API_URL}api/metrics/${metricCode}`);
            const metricData = response.data;

            // Update form data with fetched metric information
            setFormData(prev => ({
                ...prev,
                minThreshold: metricData.minimumThresholdValue !== null ? metricData.minimumThresholdValue : '',
                maxThreshold: metricData.maximumThresholdValue !== null ? metricData.maximumThresholdValue : '',
                targetValue: metricData.targetValue !== null ? metricData.targetValue : ''
            }));
        } catch (error) {
            console.error('Error fetching metric info', error);
            setError('Failed to fetch metric info');
        }
    };

    const handleSubmit = async () => {
        setIsButtonPressed(true);
        setError(null);
        try {
            const response = await axios.post(`${config.API_URL}api/metrics/${formData.metric}/setThresholdsAndTarget`, null, {
                params: {
                    minThreshold: formData.minThreshold || null,
                    maxThreshold: formData.maxThreshold || null,
                    targetValue: formData.targetValue || null
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
            setError('Failed to submit form');
        } finally {
            setIsButtonPressed(false);
        }
    };

    const clearValues = async () => {
        setIsButtonPressed(true);
        setError(null);
        try {
            await axios.post(`${config.API_URL}api/metrics/${formData.metric}/setThresholdsAndTarget`, null, {
                params: {
                    minThreshold: null,
                    maxThreshold: null,
                    targetValue: null
                }
            });
            // Clear the local state values
            setFormData({
                metric: '',
                minThreshold: '',
                maxThreshold: '',
                targetValue: ''
            });
        } catch (error) {
            console.error('There was an error!', error);
            setError('Failed to clear values');
        } finally {
            setIsButtonPressed(false);
        }
    };

    return (
        <ContentCard>
            <div className='alert-form'>
                <h1 className="form-title">Add Alert</h1>
                {error && <div className="error-message">{error}</div>}
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
                                placeholder="Enter Minimum Threshold"
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
                                placeholder="Enter Maximum Threshold"
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
                                placeholder="Enter Target Value"
                                value={formData.targetValue}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </label>
                    </div>
                    <button 
                        type="button" 
                        onClick={handleSubmit} 
                        className={`form-control alert-form-button button alert-button ${isButtonPressed ? 'pressed' : ''}`}
                        onMouseDown={() => setIsButtonPressed(true)}
                        onMouseUp={() => setIsButtonPressed(false)}
                    >
                        Save Alert
                    </button>
                    <button 
                        type="button" 
                        onClick={clearValues} 
                        className="form-control alert-form-button button alert-button"
                    >
                        Clear Values
                    </button>
                </form>
            </div>
        </ContentCard>
    );
};

export default AddAlert;

