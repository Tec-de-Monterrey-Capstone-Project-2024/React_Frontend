import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import InsightPage from '../InsightPage';
import { renderHook, act } from '@testing-library/react';
import { DataContext } from '../../../context/DataContext';
import { getQueueInsights } from '../../../services/insights/getQueueInsights';
import { getInsightsByStatus } from '../../../services/insights/getInsightStatus';
import { updateInsightStatus } from '../../../services/insights/updateInsightStatus';
import { IInsight } from '../../../services/insights/types';

jest.mock('../../../services/insights/getQueueInsights');
jest.mock('../../../services/insights/getInsightStatus');
jest.mock('../../../services/insights/updateInsightStatus');

const mockQueueInsights = [
    { id: 1, insightName: 'Insight 1', status: 'TO_DO' },
    { id: 2, insightName: 'Insight 2', status: 'IN_PROGRESS' },
    { id: 3, insightName: 'Insight 3', status: 'DONE' }
] as IInsight[];

const mockContextValue = {
    user: null,
    setUser: jest.fn(),
    arn: '',
    setArn: jest.fn(),
    selectedQueueId: 'all',
    setSelectedQueueId: jest.fn(),
    updateInsightStatus: jest.fn()
};

const setKanbanMock = jest.fn();

describe('InsightPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        setKanbanMock.mockClear();
    });

    test('renders loading state initially', () => {
        render(
            <MemoryRouter>
                <DataContext.Provider value={mockContextValue}>
                    <InsightPage />
                </DataContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders insights correctly after loading', async () => {
        (getQueueInsights as jest.Mock).mockResolvedValue({ data: mockQueueInsights });
        (getInsightsByStatus as jest.Mock).mockImplementation((status) => {
            return mockQueueInsights.filter(insight => insight.status === status);
        });

        render(
            <MemoryRouter>
                <DataContext.Provider value={mockContextValue}>
                    <InsightPage />
                </DataContext.Provider>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Insight 1')).toBeInTheDocument();
            expect(screen.getByText('Insight 2')).toBeInTheDocument();
            expect(screen.getByText('Insight 3')).toBeInTheDocument();
            expect(screen.queryByTestId("drop-columns To-do")).toBeInTheDocument();
        });
    });

    test('handles drag and drop correctly', async () => {
        (getQueueInsights as jest.Mock).mockResolvedValue({ data: mockQueueInsights });
        (getInsightsByStatus as jest.Mock).mockImplementation((status) => {
            return mockQueueInsights.filter(insight => insight.status === status);
        });
        
        render(
            <MemoryRouter>
                <DataContext.Provider value={mockContextValue}>
                    <InsightPage />
                </DataContext.Provider>
            </MemoryRouter>
        );

        const insightItem = await screen.findByText('Insight 1');
        const dropZoneInProgress = await screen.findByText('In Progress');
        const dropZoneDone = await screen.findByText('Done');

        fireEvent.dragStart(insightItem);
        fireEvent.dragEnter(dropZoneInProgress);
        fireEvent.drop(dropZoneInProgress);

        fireEvent.dragStart(insightItem);
        fireEvent.dragEnter(dropZoneDone);
        fireEvent.drop(dropZoneDone);

        await waitFor(() => {
            expect(screen.getByText('Insight 1')).toBeInTheDocument();
            expect(screen.getByText('Insight 2')).toBeInTheDocument();
            expect(screen.getByText('Insight 3')).toBeInTheDocument();
        });
    });

    test('handles insight update after drag and drop', async () => {
        (getQueueInsights as jest.Mock).mockResolvedValue({ data: mockQueueInsights });
        (getInsightsByStatus as jest.Mock).mockImplementation((status) => {
            return mockQueueInsights.filter(insight => insight.status === status);
        });
        (updateInsightStatus as jest.Mock).mockResolvedValue({});
    
        render(
            <MemoryRouter>
                <DataContext.Provider value={mockContextValue}>
                    <InsightPage />
                </DataContext.Provider>
            </MemoryRouter>
        );
    
        const insightItem = await screen.findByText('Insight 1');
        const dropZoneInProgress = await screen.findByText('In Progress');
        const dragZoneTodo = await screen.findByText('To-do');
        
        const dataTransfer = {
            setData: jest.fn(),
            getData: jest.fn(),
            dropEffect: 'move'
        };

        fireEvent.dragStart(insightItem, { dataTransfer });
        fireEvent.dragEnter(dragZoneTodo, { dataTransfer });
        fireEvent.dragOver(dropZoneInProgress, { dataTransfer });
        fireEvent.drop(dropZoneInProgress, { dataTransfer });
        fireEvent.dragEnd(insightItem, { dataTransfer });
    
        await waitFor(() => {
            expect(updateInsightStatus).toHaveBeenCalledWith(1, "IN_PROGRESS");
        });
    });


    test('handles fetch error', async () => {
        (getQueueInsights as jest.Mock).mockRejectedValue(new Error('Failed to load insights'));
        (getInsightsByStatus as jest.Mock).mockRejectedValue(new Error('Failed to load insights'));
        console.error = jest.fn(); // Mock console.error

        render(
            <MemoryRouter>
                <DataContext.Provider value={mockContextValue}>
                    <InsightPage />
                </DataContext.Provider>
            </MemoryRouter>
        );

        await waitFor(() => expect(getQueueInsights).toHaveBeenCalled());
        await waitFor(() => expect(getInsightsByStatus).toHaveBeenCalledWith("TO_DO"));
        await waitFor(() => expect(getInsightsByStatus).toHaveBeenCalledWith("IN_PROGRESS"));
        await waitFor(() => expect(getInsightsByStatus).toHaveBeenCalledWith("DONE"));
        await waitFor(() => {
            expect(screen.getByText('Insight 1')).not.toBeInTheDocument();
            expect(screen.getByText('Insight 2')).not.toBeInTheDocument();
            expect(screen.getByText('Insight 3')).not.toBeInTheDocument();
        });
        expect(console.error).toHaveBeenCalledWith(expect.any(Error));
    });

});