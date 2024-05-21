import React, { useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { ContentCard } from '../../components/Cards/ContentCard';
import { InsightRow } from "../../components/InsightRow";
import './style.css';

const InsightPage = () => {
    const insightRows = [
        { id:1, description: "Improve Service Level", color: "white" },
        { id:2, description: "Improve Occupancy", color: "white" },
        { id:3, description: "Reassignment", color: "white" },
    ];
    const kanbanInsight = {
        'To-do': {
            id: 'To-do',
            list: insightRows
        },
        'In Progress': {
            id: 'In Progress',
            list: []
        },
        'Done': {
            id: 'Done',
            list: []
        }
    }

    const [kanban, setKanban] = useState(kanbanInsight)

    const onDragEnd = ({ source, destination }: DropResult) => {
        if (!destination) return;
        const start = kanban[source.droppableId as keyof typeof kanban];
        const end = kanban[destination.droppableId as keyof typeof kanban];
        const draggableItem = start.list[source.index];
        if (start === end) {
            const newList = Array.from(start.list);
            newList.splice(source.index, 1);
            newList.splice(destination.index, 0, draggableItem);
            setKanban(prevState => ({
                ...prevState,
                [start.id]: {
                    ...start,
                    list: newList
                }
            }));
        } else {
            const start = kanban[source.droppableId as keyof typeof kanban] as { id: string; list: { id: number; description: string; color: string; }[]; index: number };
            const sourceList = Array.from(start.list);
            sourceList.splice(start.index, 1);

            const end = kanban[destination.droppableId as keyof typeof kanban] as { id: string; list: { id: number; description: string; color: string; }[]; index: number };
            const destinationList = Array.from(end.list);
            destinationList.splice(end.index, 0, draggableItem);

            setKanban(prevState => ({
                ...prevState,
                [start.id]: {
                    ...start,
                    list: sourceList
                },
                [end.id]: {
                    ...end,
                    list: destinationList
                }
            }));
        }
    };


    return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className='kanban'>
            {Object.values(kanban).map(kan => (
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
                                                        description={insight.description}
                                                        color={insight.color}
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
            ))}
        </div>
    </DragDropContext>
  );
}

export default InsightPage;