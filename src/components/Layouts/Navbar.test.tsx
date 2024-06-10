import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import { useDataContext } from '../../context/DataContext';
import { getInstance } from '../../services/instance/getInstance';
import { getNotificationAlerts } from '../../services';
import { getQueues } from '../../services/queues/getQueues';

// Mocks
jest.mock('../../context/DataContext', () => ({
    useDataContext: jest.fn(),
}));

jest.mock('../../services/instance/getInstance', () => ({
    getInstance: jest.fn(),
}));

jest.mock('../../services', () => ({
    getNotificationAlerts: jest.fn(),
}));

jest.mock('../../services/queues/getQueues', () => ({
    getQueues: jest.fn(),
}));

jest.mock('../Button', () => ({ Button: ({ children, ...props }: any) => <button {...props}>{children}</button> }));
jest.mock('../Popups/AlertPopup', () => ({
    AlertPopup: ({ isVisible, alerts, onClose }: { isVisible: boolean, alerts: any[], onClose: () => void }) => isVisible ? <div data-testid="AlertPopup">{alerts.map(alert => <p key={alert.id}>{alert.metricName}</p>)}</div> : null,
}));

const mockUseDataContext = useDataContext as jest.Mock;
const mockGetInstance = getInstance as jest.Mock;
const mockGetNotificationAlerts = getNotificationAlerts as jest.Mock;
const mockGetQueues = getQueues as jest.Mock;

describe('Navbar Component', () => {
    const user = { instanceId: '12345' };
    const setArnMock = jest.fn();
    const setSelectedQueueIdMock = jest.fn();
    const alerts = [
        { id: 1, metricName: 'Alert 1' },
        { id: 2, metricName: 'Alert 2' },
    ];
    const queues = [
        { id: 1, name: 'Queue 1' },
        { id: 2, name: 'Queue 2' },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
        mockUseDataContext.mockReturnValue({
            user,
            setArn: setArnMock,
            selectedQueueId: 'all',
            setSelectedQueueId: setSelectedQueueIdMock,
        });
        mockGetInstance.mockResolvedValue({ data: { arn: 'arn:test', instanceAlias: 'TestInstance', id: '12345' } });
        mockGetNotificationAlerts.mockResolvedValue(alerts);
        mockGetQueues.mockResolvedValue({ data: queues });
    });

    const renderNavbarAtRoute = (route: string) => {
        return render(
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    <Route path="*" element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        );
    };

    test('should fetch instance details and set ARN', async () => {
        renderNavbarAtRoute('/');
        expect(await screen.findByText('TestInstance')).toBeInTheDocument();
        expect(setArnMock).toHaveBeenCalledWith('arn:test');
    });

    test('should filter alerts based on localStorage dismissed alerts', async () => {
        localStorage.setItem('dismissedAlerts', JSON.stringify([1]));
        renderNavbarAtRoute('/');
        await waitFor(() => {
            expect(screen.queryByText('Alert 1')).toBeNull();
            expect(screen.getByText('Alert 2')).toBeInTheDocument();
        });
    });

    test('should handle alert fetching error', async () => {
        mockGetNotificationAlerts.mockRejectedValue(new Error('Alerts fetch failed'));
        renderNavbarAtRoute('/');
        await waitFor(() => expect(screen.getByText('Failed to fetch alerts.')).toBeInTheDocument());
    });

    test('should change queue when a new queue is selected', async () => {
        renderNavbarAtRoute('/');
        const select = await screen.findByTitle('queues');
        fireEvent.change(select, { target: { value: 'Queue 2' } });
        expect(setSelectedQueueIdMock).toHaveBeenCalledWith('Queue 2');
    });

    test('should set title and subtitle for /queues', async () => {
        renderNavbarAtRoute('/queues');
        await waitFor(() => {
            expect(screen.getByText('Queues')).toBeInTheDocument();
        });
    });

    test('should set title and subtitle for /dashboard', async () => {
        renderNavbarAtRoute('/dashboard');
        await waitFor(() => {
            expect(screen.getByText('Dashboard')).toBeInTheDocument();
        });
    });

    test('should set title and subtitle for /alerts', async () => {
        renderNavbarAtRoute('/alerts');
        await waitFor(() => {
            expect(screen.getByText('Alerts')).toBeInTheDocument();
        });
    });

    test('should set title and subtitle for /agents', async () => {
        renderNavbarAtRoute('/agents');
        await waitFor(() => {
            expect(screen.getByText('Agents')).toBeInTheDocument();
        });
    });

    test('should set title and subtitle for /insights', async () => {
        renderNavbarAtRoute('/insights');
        await waitFor(() => {
            expect(screen.getByText('Insights')).toBeInTheDocument();
        });
    });

    test('should set title and subtitle for /insights-show', async () => {
        renderNavbarAtRoute('/insights-show');
        await waitFor(() => {
            expect(screen.getByText('Insight')).toBeInTheDocument();
        });
    });

    test('should set title and subtitle to null for unknown routes', async () => {
        renderNavbarAtRoute('/unknown-route');
        await waitFor(() => {
            expect(screen.getByText(' ')).toBeInTheDocument();
        });
    });

    test('should toggle alert popup visibility when alert button is clicked', async () => {
        renderNavbarAtRoute('/');
        const alertButton = await screen.findByRole('button', { name: /Alert icon/i });
        fireEvent.click(alertButton);
        expect(screen.getByTestId('AlertPopup')).toBeInTheDocument();
        fireEvent.click(alertButton);
        expect(screen.queryByTestId('AlertPopup')).toBeNull();
    });

    test('should navigate to account page when account button is clicked', async () => {
        renderNavbarAtRoute('/');
        const accountButton = await screen.findByRole('button', { name: /Agent icon/i });
        fireEvent.click(accountButton);
        await waitFor(() => {
            expect(window.location.pathname).toBe('/account');
        });
    });
});
