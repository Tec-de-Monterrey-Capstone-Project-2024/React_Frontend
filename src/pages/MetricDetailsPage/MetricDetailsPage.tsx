import { ContentCard } from '../../components/Cards/ContentCard';
import { IMetric } from '../../services/metrics/types';
import MetricsData from '../../config/MetricsData';
import { Pie } from '../../components/DataDisplay/PieChart';
import { GaugeChart } from '../../components/DataDisplay/GaugeChart';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { IMetricDetailsPage } from './types';

const MetricDetailsPage: React.FC = () => {
    const { metric_info_code, value } = useParams<{ metric_info_code: string, value: string }>();
    // const [metric, setMetric] = useState<IMetric | null>(null);
    // const [loading, setLoading] = useState<boolean>(true);
    if (!metric_info_code || !(metric_info_code in MetricsData)) {
        return <div>Metric not found</div>;
    }
    if (!value) {
        return <div>Metric not found</div>;
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);

    //         setLoading(false);
    //     };
    //     fetchData();
    // }, [metric_info_code]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (!metric) {
    //     return <div>Metric not found</div>;
    // }

    // const { metric_info_code, value } = metric;
    const { name, graph } = MetricsData[metric_info_code];

    return (
        <div className="pt-5 pl-7">
            <h2 className="pb-5">
                <b><u>Metric Details</u></b>
            </h2>
            <div className='w-fit'>
                <ContentCard data-testid="graph-container">
                    <h5 className="pb-2"><b>{name + " (" + metric_info_code + ")"}</b></h5>
                    {graph === 'Gauge' ? (
                            <GaugeChart min={0} max={100} value={parseInt(value)} />
                    ) : (
                            <Pie value={parseInt(value)} metric={metric_info_code} />
                    )}
                </ContentCard>
            </div>
        </div>
    );
};

export default MetricDetailsPage;
