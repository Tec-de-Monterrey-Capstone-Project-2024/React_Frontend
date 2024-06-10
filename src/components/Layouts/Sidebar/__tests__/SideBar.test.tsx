import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';  


describe('Sidebar', () => {
    test('renders correctly', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        );

        expect(getByText('Dashboard')).toBeInTheDocument();
        expect(getByText('Agents')).toBeInTheDocument();
        expect(getByText('Alerts')).toBeInTheDocument();
        expect(getByText('Insights')).toBeInTheDocument();
    }); 
});
