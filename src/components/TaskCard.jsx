import React from 'react';
import TaskWorkerDisplay from './TaskWorkerDisplay';
import TaskMenu from './TaskMenu';
import PrioritySelect from './PrioritySelect';
import Progressbar from './ProgressBar';

class TaskCard extends React.Component {

    state = {
        view: 'display'
    }

    render() {
        const { task, taskId, changePriority, handleStatusChange } = this.props;
        return (
            <div className="task-card" >
                <div className="task-text" >
                    <h3 className="task-header" >{task.title}</h3>
                    <p className="task-desc" >{task.desc}</p>
                    <Progressbar
                        progress={task.progress}
                        className="progress-bar"
                    />
                </div>
                <TaskWorkerDisplay
                    task={task}
                    taskId={taskId}
                    view={this.state.view}
                    className="task-worker-display"
                    changePriority={changePriority}
                    toggleMenu={this.toggleMenu} />
                <TaskMenu className="task-worker-display"
                    view={this.state.view}
                    toggleMenu={this.toggleMenu} />
                <PrioritySelect
                    className="task-worker-display"
                    priority={task.priority}
                    taskId={taskId}
                    changePriority={changePriority}
                    view={this.state.view}
                    toggleMenu={this.toggleMenu}
                    handleStatusChange={handleStatusChange} />
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