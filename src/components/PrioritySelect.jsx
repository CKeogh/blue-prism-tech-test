import React from 'react';
import PriorityDisplay from './PriorityDisplay';

const PrioritySelect = ({ className, view, toggleMenu, priority, taskId, changePriority, handleStatusChange }) => {
    return (
        <div className={className} style={{
            opacity: view === 'prioritySelect' ? '1' : '0',
            visibility: view === 'prioritySelect' ? 'visible' : 'hidden'
        }} >
            <p className="menu-option" >Select Priority</p>
            <PriorityDisplay
                priority={priority}
                taskId={taskId}
                changePriority={changePriority}
                toggleMenu={toggleMenu}
                handleStatusChange={handleStatusChange} />
        </div>
    )
}

export default PrioritySelect;