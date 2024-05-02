import React from 'react';
import { IGaugeChart } from './types';

import './styles.css';

const GaugeChart: React.FC<IGaugeChart> = ({ min, max, value }) => {
    const percentage = ((value - min) / (max - min)) * 100;
    const styles = {
        transform: `rotate(calc(${percentage} * 1.8deg))`
    }
    
    return (
        <>
            <div className='gauge-chart'>
                <div className='gauge' style={styles}>
                    <div className='center'></div>
                </div>
            </div>
        </>
    )
}

export default GaugeChart;
