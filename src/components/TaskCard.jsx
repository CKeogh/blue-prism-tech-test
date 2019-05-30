import React from 'react';
import TaskWorkerDisplay from './TaskWorkerDisplay';

const TaskCard = ({ task, taskId, changePriority }) => {
    return (
        <div className="task-card" >
            <div className="task-text" >
                <h3 className="task-header" >{task.title}</h3>
                <p className="task-desc" >{task.desc}</p>
            </div>
            <TaskWorkerDisplay task={task} taskId={taskId} className="task-worker-display" changePriority={changePriority} />
        </div>
    )
}

export default TaskCard;