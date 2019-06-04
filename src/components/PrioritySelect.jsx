import React from 'react';
import PriorityDisplay from './PriorityDisplay';
import ExitButton from './ExitButton';

const PrioritySelect = ({ className, view, toggleMenu, priority, taskId, changePriority, handleStatusChange }) => {
    return (
        <div className={className} style={{
            opacity: view === 'prioritySelect' ? '1' : '0',
            visibility: view === 'prioritySelect' ? 'visible' : 'hidden'
        }} >
            <ExitButton toggleMenu={toggleMenu} />
            <p className="priority-text" >Select Priority</p>
            <PriorityDisplay
                className="priority-display"
                priority={priority}
                taskId={taskId}
                changePriority={changePriority}
                toggleMenu={toggleMenu}
                handleStatusChange={handleStatusChange} />
        </div>
    )
}

export default PrioritySelect;