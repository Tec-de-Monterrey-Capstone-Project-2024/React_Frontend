import { IMetric } from '../../services/metrics/types';
import { GaugeChart } from '../../components/DataDisplay/GaugeChart';
import { Pie } from '../../components/DataDisplay/PieChart';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getGeneralMetrics } from '../../services/metrics/getGeneralMetrics';

const MetricDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [metric, setMetric] = useState<IMetric | null>(null); 
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if(id){
                const res = await getGeneralMetrics();
                console.log(res);
            } else {
            }

            setLoading(false);
        }

        fetchData();
    }, [id])
    
    return (
        <div>
            MetricsDetailsPage
        </div>
    );

    /*
    return (
        <div key={id} className='chart'>
          <h5>{name}</h5>
            {graph === 'Gauge' ? (
              <GaugeChart min={min} max={max} value={value} />
            ) : (
              <Pie value={value} metric={metric_info_code} />
            )}
          </div>
    );
    */
};

export default MetricDetailsPage;