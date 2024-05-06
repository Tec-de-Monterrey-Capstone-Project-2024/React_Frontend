import React from 'react';
import { IGaugeChart } from './types';

import './styles.css';

const GaugeChart: React.FC<IGaugeChart> = ({ min, max, value }) => {
    var percentage = ((value - min) / (max - min)) * 100;
    if (percentage > max) {
        percentage = 100
    }
    const styles = {
        transform: `rotate(calc(${percentage} * 1.8deg))`
    };
    
    return (
        <div className='gauge'>
            <div className='gauge-chart'>
                <div className='content'>
                    <div className='gauge' style={styles}>
                        <div className='center'></div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='text min'>{min}</div>
                <div className='text value'>{value}</div>
                <div className='text max'>{max}</div>
            </div>
        </div>
    )
}

export default GaugeChart;
