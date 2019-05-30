import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, changePriority }) => {
    return (
        <div className="task-list" >
            {tasks.map((task, i) => {
                return <TaskCard key={i} task={task} taskId={i} changePriority={changePriority} />
            })}
        </div>
    )
}

export default TaskList;