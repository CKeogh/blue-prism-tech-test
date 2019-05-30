import React from 'react';
import PriorityDisplay from './PriorityDisplay';

class TaskWorkerDisplay extends React.Component {
    render() {
        const { className, task, taskId, changePriority, toggleMenu, view } = this.props
        return (
            <div className={className} style={{
                opacity: view === 'display' ? '1' : '0'
            }} >
                <h3 className="workers-assigned" >Workers assigned</h3>
                <p className="worker-count" >{task.workers}/25</p>
                <PriorityDisplay className="priority-display" taskId={taskId} priority={task.priority} changePriority={changePriority} />
                <p className="task-status" >{task.status}</p>
                <i className={`play-button fas fa-${task.status === 'unassigned' ? 'play' : 'pause'}-circle`} onClick={() => toggleMenu('menu')} ></i>
            </div>
        )
    }
}

export default TaskWorkerDisplay;