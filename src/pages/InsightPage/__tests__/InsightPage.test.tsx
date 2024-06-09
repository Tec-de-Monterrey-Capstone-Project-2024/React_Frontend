import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCallback } from 'react';
import { MemoryRouter } from 'react-router-dom';
import InsightPage from '../InsightPage';
//import { mockGetComputedStyle, mockDndSpacing, makeDnd, DND_DIRECTION_UP, DND_DIRECTION_DOWN, DND_DRAGGABLE_DATA_ATTR } from 'react-beautiful-dnd-test-utils';
import { DataContext } from '../../../context/DataContext';
import { getQueueInsights } from '../../../services/insights/getQueueInsights';
import { getInsightsByStatus } from '../../../services/insights/getInsightStatus';
import { IInsight } from '../../../services/insights/types';

jest.mock('../../../services/insights/getQueueInsights');
jest.mock('../../../services/insights/getInsightStatus');
jest.mock('../../../services/insights/updateInsightStatus');

const mockQueueInsights = [
    { id: 1, insightName: 'Insight 1', status: 'TO_DO' },
    { id: 2, insightName: 'Insight 2', status: 'IN_PROGRESS' },
    { id: 3, insightName: 'Insight 3', status: 'DONE' },
    { id: 4, insightName: 'Insight 4', status: 'TO_DO' },
] as IInsight[];

const mockContextValue = {
    user: null,
    setUser: jest.fn(),
    arn: '',
    setArn: jest.fn(),
    selectedQueueId: 'all',
    setSelectedQueueId: jest.fn(),
    updateInsightStatus: jest.fn(),
};

const setKanbanMock = jest.fn();

describe('InsightPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        setKanbanMock.mockClear();  
    });

    afterEach(() => {
        jest.resetAllMocks();
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
            expect(screen.getByText('Insight 4')).toBeInTheDocument();
        });
    });

    test('separateInsights correctly separates insights by status', () => {
        const setKanban = jest.fn();
        const { result } = renderHook(() => {
            const separateInsights = useCallback((insights: IInsight[]) => {
                const toDo: IInsight[] = [];
                const inProgress: IInsight[] = [];
                const done: IInsight[] = [];
    
                insights.forEach((insight) => {
                    switch (insight.status) {
                        case 'TO_DO':
                            toDo.push(insight);
                            break;
                        case 'IN_PROGRESS':
                            inProgress.push(insight);
                            break;
                        case 'DONE':
                            done.push(insight);
                            break;
                        default:
                            break;
                    }
                });
    
                setKanban({
                    'To-do': { id: 'To-do', list: toDo },
                    'In Progress': { id: 'In Progress', list: inProgress },
                    'Done': { id: 'Done', list: done }
                });
            }, []);
    
            return { separateInsights };
        });
    
        act(() => {
            result.current.separateInsights(mockQueueInsights);
        });
    
        expect(setKanban).toHaveBeenCalledWith({
            'To-do': { id: 'To-do', list: [{ id: 1, insightName: 'Insight 1', status: 'TO_DO' }, { id: 4, insightName: 'Insight 4', status: 'TO_DO' }] },
            'In Progress': { id: 'In Progress', list: [{ id: 2, insightName:'Insight 2', status: 'IN_PROGRESS' }] },
            'Done': { id: 'Done', list: [{ id: 3, insightName:'Insight 3', status: 'DONE' }] }
        });
    }); 

    test('Kanban columns render correctly', async () => {
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
            expect(screen.getByTestId('droppable-To-do')).toBeInTheDocument();
            expect(screen.getByTestId('droppable-In Progress')).toBeInTheDocument();
            expect(screen.getByTestId('droppable-Done')).toBeInTheDocument();
        });
    }); 

    /*
    test('Drag and drop moves task inside the same column', async () => {
        (getQueueInsights as jest.Mock).mockResolvedValue({ data: mockQueueInsights });
        (getInsightsByStatus as jest.Mock).mockImplementation((status) => {
            return mockQueueInsights.filter(insight => insight.status === status);
        });
    
        const { container } = render(
            <MemoryRouter>
                <DataContext.Provider value={mockContextValue}>
                    <InsightPage />
                </DataContext.Provider>
            </MemoryRouter>
        );
    
        mockDndSpacing(container);
    
        await waitFor(() => expect(screen.getByTestId('draggable-1')).toBeInTheDocument());
    
        const toDoColumn = screen.getByTestId('droppable-To-do');
        const [insight1, insight4] = within(toDoColumn).getAllByTestId(/^draggable-/);
    
        await makeDnd({
            getDragElement: () => insight1.closest(DND_DRAGGABLE_DATA_ATTR),
            direction: DND_DIRECTION_DOWN,
            positions: 1,
        });
    
        await waitFor(() => {
            const updatedInsights = within(toDoColumn).getAllByTestId(/^draggable-/);
            expect(updatedInsights[0].textContent).toBe('Insight 4');
            expect(updatedInsights[1].textContent).toBe('Insight 1');
        });
    
        
    });
    */
});