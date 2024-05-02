import React from 'react';
import { IGaugeChart } from './types';

import './styles.css';

const GaugeChart: React.FC<IGaugeChart> = ({ min, max, value }) => {
    return (
        <>
            <div className='gauge-chart'>
                <div className='gauge'>
                    {/* <div className='percentage'></div> */}
                    <div className='center'></div>
                </div>
            </div>
        </>
    )
}

export default GaugeChart;
