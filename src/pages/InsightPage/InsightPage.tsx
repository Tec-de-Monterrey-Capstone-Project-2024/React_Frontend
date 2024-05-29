import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { useDataContext } from '../../context/DataContext';

import { getQueueInsights } from "../../services/insights/getQueueInsights";
import { updateInsightStatus } from "../../services/insights/updateInsightStatus";
import { IInsight } from "../../services/insights/types";

import { ContentCard } from '../../components/Cards/ContentCard';
import { InsightRow } from "../../components/InsightRow";

import './style.css';

const InsightPage = () => {
    const { selectedInstanceId, selectedQueueId } = useDataContext();
    const [loading, setLoading] = useState(true);
    const [insights, setInsights] = useState<IInsight[]>([]);
    const [toDoInsights, setToDoInsights] = useState<IInsight[]>([]);
    const [inProgressInsights, setInProgressInsights] = useState<IInsight[]>([]);
    const [doneInsights, setDoneInsights] = useState<IInsight[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getQueueInsights(selectedInstanceId, selectedQueueId);
                console.log(res.data);
                setInsights(res.data);
            } catch (tcErr) {
                console.error(tcErr);
            }
            setLoading(false);
        }
        fetchData();
    }, [selectedInstanceId, selectedQueueId]);

    useEffect(() => {
        if (insights.length > 0) {
            separateInsights(insights);
        }
    }, [insights]);

    const separateInsights = (insights: IInsight[]) => {
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
    
        setToDoInsights(toDo);
        setInProgressInsights(inProgress);
        setDoneInsights(done);
    };
    
    const kanbanInsight = {
        'To-do': {
            id: 'To-do',
            list: toDoInsights
        },
        'In Progress': {
            id: 'In Progress',
            list: inProgressInsights
        },
        'Done': {
            id: 'Done',
            list: doneInsights
        }
    }

    const [kanban, setKanban] = useState(kanbanInsight);

    const onDragEnd = async ({ source, destination }: DropResult) => {
        if (!destination) return;
    
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }
    
        const start = kanban[source.droppableId as keyof typeof kanban];
        const end = kanban[destination.droppableId as keyof typeof kanban];
        const [draggableItem] = start.list.splice(source.index, 1);
    
        // Update status based on the destination column
        let newStatus: "TO_DO" | "IN_PROGRESS" | "DONE" = draggableItem.status;
        if (end.id === "To-do") {
            newStatus = "TO_DO";
        } else if (end.id === "In Progress") {
            newStatus = "IN_PROGRESS";
        } else if (end.id === "Done") {
            newStatus = "DONE";
        }
    
        draggableItem.status = newStatus;  // Update the status of the item
    
        // Update the insight status on the server
        await updateInsightStatus(draggableItem.id, newStatus);
    
        end.list.splice(destination.index, 0, draggableItem);
    
        setKanban(prevState => ({
            ...prevState,
            [start.id]: {
                ...start,
                list: start.list
            },
            [end.id]: {
                ...end,
                list: end.list
            }
        }));
    };
    
    useEffect(() => {
        setKanban({
            'To-do': { id: 'To-do', list: toDoInsights },
            'In Progress': { id: 'In Progress', list: inProgressInsights },
            'Done': { id: 'Done', list: doneInsights }
        });
    }, [toDoInsights, inProgressInsights, doneInsights]);
    
    return (
        <section className="insights-page">
            <div className="section-container container">
                <div className='kanban'>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {loading ? <p>Loading...</p> : (Object.values(kanban).map(kan => (
                            <Droppable droppableId={kan.id} key={kan.id}>
                                {(provided) => (
                                    <div className='kanban-column' ref={provided.innerRef} {...provided.droppableProps}>
                                        <ContentCard>
                                            <div className='kanban-title'>
                                                <h1>{kan.id}</h1>
                                            </div>
                                            <div className='kanban-rows'>
                                                {kan.list.map((insight, index) => (
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
                                                ))}
                                            </div>
                                        </ContentCard>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        )))}
                    </DragDropContext>
                </div>
            </div>
        </section>
  );
}

export default InsightPage;