import React, { useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { ContentCard } from '../../components/Cards/ContentCard';
import { InsightRow } from "../../components/InsightRow";
import './style.css';

const InsightPage = () => {
    const insightRows = [
        { id:1, title: "Improve Service Level", color: "white" },
        { id:2, title: "Improve Occupancy", color: "white" },
        { id:3, title: "Reassignment", color: "white" },
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

    const onDragEnd = ({source,destination}: DropResult) => {
        if (!destination) return;
    
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }
    
        const start = kanban[source.droppableId as keyof typeof kanban];
        const end = kanban[destination.droppableId as keyof typeof kanban];
        if (start === end) {
            const newList = Array.from(start.list);
            const [draggableItem] = newList.splice(source.index, 1);
            newList.splice(destination.index, 0, draggableItem);
    
            setKanban(prevState => ({
                ...prevState,
                [start.id]: {
                    ...start,
                    list: newList
                }
            }));
        } else { 
            const startList = Array.from(start.list);
            const [draggableItem] = startList.splice(source.index, 1);
            const endList = Array.from(end.list);
            endList.splice(destination.index, 0, draggableItem);
    
            setKanban(prevState => ({
                ...prevState,
                [start.id]: {
                    ...start,
                    list: startList
                },
                [end.id]: {
                    ...end,
                    list: endList
                }
            }));
        }
    };
    
    
    return (
    <DragDropContext onDragEnd={onDragEnd}>
        <section className="insights-page">
            <div className="section-container container">
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
                                                                title={insight.title}
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
            </div>
        </section>
    </DragDropContext>
  );
}

export default InsightPage;