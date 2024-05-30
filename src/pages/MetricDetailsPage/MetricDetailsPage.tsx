import { ContentCard } from '../../components/Cards/ContentCard';
import { IMetric } from '../../services/metrics/types';
import MetricsData from '../../config/MetricsData';
import { Pie } from '../../components/DataDisplay/PieChart';
import { GaugeChart } from '../../components/DataDisplay/GaugeChart';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { IMetricDetailsPage } from './types';

const MetricDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [metric, setMetric] = useState<IMetric | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (id) {
                // const res = await getGeneralMetrics();
                // const dataMetric = res.data.find((metric: IMetric) => metric.id.toString() === id);
                // setMetric(dataMetric || null);
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
    const { name, graph } = MetricsData[metric_info_code];

    return (
        <div className="pt-5 pl-7">
            <h2 className="pb-5">
                <b><u>Metric Details</u></b>
            </h2>
            <div key={id} className='w-fit'>
                <ContentCard>
                    <h5 className="pb-2"><b>{name + " (" + metric_info_code + ")"}</b></h5>
                    {graph === 'Gauge' ? (
                            <GaugeChart min={0} max={100} value={value} />
                    ) : (
                            <Pie value={value} metric={metric_info_code} />
                    )}
                </ContentCard>
            </div>
        </div>
    );
};

export default MetricDetailsPage;
