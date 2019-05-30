import React from 'react';
import PriorityDisplay from './PriorityDisplay';

const TaskWorkerDisplay = ({ className, task, taskId, changePriority }) => {
    return (
        <div className={className} >
            <h3 className="workers-assigned" >Workers assigned</h3>
            <p className="worker-count" >{task.workers}/25</p>
            <PriorityDisplay className="priority-display" taskId={taskId} priority={task.priority} changePriority={changePriority} />
            <i className={`play-button fas fa-${task.status === 'unassigned' ? 'play' : 'pause'}-circle`} ></i>
        </div>
    )
}

export default TaskWorkerDisplay;