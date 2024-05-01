import React from 'react';
import { IGaugeChart } from './types';

import './styles.css';

const GaugeChart: React.FC<IGaugeChart> = ({ min, max, value }) => {
    return (
        <>
            <div className='gauge-chart'>
                <h1>Gauge Chart</h1>
                <p>{value}</p>
            </div>
        </>
    )
}

export default GaugeChart;
