import PieChart from '../PieChart';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('GaugeChart', () => {
    test('renders correctly', () => {
        const { getByText } = render(
            <BrowserRouter>
                <PieChart value={77} metric="Service Level"/>
            </BrowserRouter>
        );
    
        expect(getByText('Service Level (77%)'))    
    });
});
