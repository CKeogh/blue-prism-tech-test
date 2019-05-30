import React from 'react';
import TaskWorkerDisplay from './TaskWorkerDisplay';
import TaskMenu from './TaskMenu';

class TaskCard extends React.Component {

    state = {
        view: 'display'
    }

    render() {
        const { task, taskId, changePriority } = this.props;
        return (
            <div className="task-card" >
                <div className="task-text" >
                    <h3 className="task-header" >{task.title}</h3>
                    <p className="task-desc" >{task.desc}</p>
                </div>
                <TaskWorkerDisplay task={task} taskId={taskId} view={this.state.view} className="task-worker-display" changePriority={changePriority} toggleMenu={this.toggleMenu} />
                <TaskMenu className="task-worker-display" view={this.state.view} />
            </div>
        )
    }

    toggleMenu = (newView) => {
        this.setState({
            view: newView
        })
    }
}

export default TaskCard;