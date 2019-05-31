import React from 'react';

const PriorityDisplay = ({ priority, taskId, className, changePriority, toggleMenu, handleStatusChange }) => {

    const filled = new Array(priority).fill('x')
    const empty = new Array(3 - priority).fill('x')

    return (
        // TODO 
        // MAKE CHANGE PRIORITY WORK PROPERLY
        <div className={className} >
            {filled.map((_, i) => {
                return <span key={i} onClick={(e) => {
                    changePriority(e, i, taskId)
                    if (toggleMenu) toggleMenu('display')
                    if (handleStatusChange) handleStatusChange(taskId, 'running')
                }} className="star-icon fas fa-star" />
            })}
            {empty.map((_, i) => {
                return <span key={i} onClick={(e) => {
                    changePriority(e, i + 1, taskId)
                    if (toggleMenu) toggleMenu('display')
                    if (handleStatusChange) handleStatusChange(taskId, 'running')
                }} className="star-icon far fa-star" />
            })}
        </div>
    )
}

export default PriorityDisplay;