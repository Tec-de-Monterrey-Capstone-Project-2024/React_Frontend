import React, { useState, useEffect, useCallback } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { useDataContext } from '../../context/DataContext';

import { getQueueInsights } from "../../services/insights/getQueueInsights";
import { updateInsightStatus } from "../../services/insights/updateInsightStatus";
import { getInsightsByStatus } from "../../services/insights/getInsightStatus";
import { IInsight } from "../../services/insights/types";

import { ContentCard } from '../../components/Cards/ContentCard';
import { InsightRow } from "../../components/InsightRow";

import './style.css';

const InsightPage = () => {
    const { selectedQueueId } = useDataContext();
    const [loading, setLoading] = useState(true);
    const [insights, setInsights] = useState<IInsight[]>([]);
    const [kanban, setKanban] = useState({
        'To-do': { id: 'To-do', list: [] as IInsight[] },
        'In Progress': { id: 'In Progress', list: [] as IInsight[] },
        'Done': { id: 'Done', list: [] as IInsight[] }
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getQueueInsights(selectedQueueId);
                const toDoRes = await getInsightsByStatus("TO_DO");
                const inProgressRes = await getInsightsByStatus("IN_PROGRESS");
                const doneRes = await getInsightsByStatus("DONE");

                setInsights(res.data);
                setKanban({
                    'To-do': { id: 'To-do', list: Array.isArray(toDoRes) ? toDoRes : [] },
                    'In Progress': { id: 'In Progress', list: Array.isArray(inProgressRes) ? inProgressRes : [] },
                    'Done': { id: 'Done', list: Array.isArray(doneRes) ? doneRes : [] }
                });
            } catch (error) {
                console.error('Failed to load insights', error);
            }
            setLoading(false);
        };
        fetchData();
    }, [selectedQueueId]);

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

    useEffect(() => {
        if (insights.length > 0) {
            separateInsights(insights);
        }
    }, [insights, separateInsights]);

    const onDragEnd = async ({ source, destination }: DropResult) => {
        if (!destination) return;

        const start = kanban[source.droppableId as keyof typeof kanban];
        const end = kanban[destination.droppableId as keyof typeof kanban];
        const [draggableItem] = start.list.splice(source.index, 1);

        let newStatus: "TO_DO" | "IN_PROGRESS" | "DONE" = draggableItem.status;
        if (end.id === "To-do") {
            newStatus = "TO_DO";
        } else if (end.id === "In Progress") {
            newStatus = "IN_PROGRESS";
        } else if (end.id === "Done") {
            newStatus = "DONE";
        }

        draggableItem.status = newStatus;

        try {
            await updateInsightStatus(draggableItem.id, newStatus);
            end.list.push(draggableItem);

            setKanban({
                ...kanban,
                [start.id]: start,
                [end.id]: end
            });
        } catch (error) {
            console.error("Failed to update insight status", error);
            // Revert the changes in case of error
            start.list.splice(source.index, 0, draggableItem);
            setKanban({
                ...kanban,
                [start.id]: start
            });
        }
    };

    return (
        <section className="insights-page">
            <div className="section-container m-8">
                <div className='kanban'>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {loading ? <p>Loading...</p> : (
                            Object.values(kanban).map(kan => (
                                <Droppable droppableId={kan.id} key={kan.id}>
                                    {(provided) => (
                                        <div className='kanban-column' ref={provided.innerRef} {...provided.droppableProps} data-testid={`droppable-${kan.id}`}>
                                            <ContentCard>
                                                <div className='kanban-title' data-testid={`drop-columns ${kan.id}`}>
                                                    <h1>{kan.id}</h1>
                                                </div>
                                                <div className='kanban-rows' >
                                                    {kan.list.map((insight, index) => (
                                                        <div className="w-full" key={insight.id} data-testid={`draggable-${insight.id}`}>
                                                            <Draggable key={insight.id} draggableId={insight.id.toString()} index={index}>
                                                                {(provided) => (
                                                                    <div ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}>
                                                                        <InsightRow
                                                                            id={insight.id}
                                                                            title={insight.insightName}
                                                                            color={'white'}
                                                                        />
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        </div>
                                                    ))}
                                                </div>
                                            </ContentCard>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            ))
                        )}
                    </DragDropContext>
                </div>
            </div>
        </section>
    );
}

export default InsightPage;