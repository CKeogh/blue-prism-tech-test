import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, changePriority, handleStatusChange }) => {
    return (
        <div className="task-list" >
            {tasks.map((task, i) => {
                return <TaskCard
                    key={i}
                    task={task}
                    taskId={i}
                    changePriority={changePriority}
                    handleStatusChange={handleStatusChange} />
            })}
        </div>
    )
}

export default TaskList;