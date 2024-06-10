import GaugeChart from '../GaugeChart';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('GaugeChart', () => {
    test('renders correctly and shows the correct results', () => {
        const { getByText } = render(
            <BrowserRouter>
                <GaugeChart min={0} max={100} value={77}/>
            </BrowserRouter>
        );

        expect(getByText('0')).toBeInTheDocument();
        expect(getByText('77')).toBeInTheDocument();
        expect(getByText('100')).toBeInTheDocument();
    });
});
