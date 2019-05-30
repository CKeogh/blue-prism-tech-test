import React from 'react';

export const renderPriorityDisplay = (priorityNum) => {
    const filled = new Array(priorityNum);
    const empty = new Array(priorityNum - 3);

    return (
        <div className="priority-display" >
            {filled.map(val => {
                return <span className="fas fa-star" />
            })}
            {empty.map(val => {
                return <span className="far fa-star" />
            })
            }
        </div>
    )
}