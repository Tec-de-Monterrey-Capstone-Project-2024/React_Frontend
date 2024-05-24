import { IMetric } from '../../services/metrics/types';
import { GaugeChart } from '../../components/DataDisplay/GaugeChart';
import { Pie } from '../../components/DataDisplay/PieChart';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getGeneralMetrics } from '../../services/metrics/getGeneralMetrics';
import MetricsData, { MetricData } from '../../config/MetricsData';

const MetricDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [metric, setMetric] = useState<IMetric | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (id) {
                const res = await getGeneralMetrics();
                const dataMetric = res.data.find((metric: IMetric) => metric.id.toString() === id);
                setMetric(dataMetric || null);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!metric) {
        return <div>Metric not found</div>;
    }

    const { metric_info_code, value } = metric;
    const { name, min, max, graph } = MetricsData[metric_info_code];

    return (
        <div>
            <h2>Metric Details</h2>
            <div key={id} className='chart'>
                <h5>{metric_info_code}</h5>
                {graph === 'Gauge' ? (
                    <GaugeChart min={0} max={100} value={value} />
                ) : (
                    <Pie value={value} metric={metric_info_code} />
                )}
            </div>
        </div>
    );
};

export default MetricDetailsPage;
