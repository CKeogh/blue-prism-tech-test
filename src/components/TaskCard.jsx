import React from 'react';
import TaskWorkerDisplay from './TaskWorkerDisplay';
import TaskMenu from './TaskMenu';
import PrioritySelect from './PrioritySelect';
import Progressbar from './ProgressBar';

class TaskCard extends React.Component {

    state = {
        view: 'display',
        showProgress: false,
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
                        showProgress={this.state.showProgress}
                    />
                </div>
                <TaskWorkerDisplay
                    task={task}
                    taskId={taskId}
                    view={this.state.view}
                    className="task-worker-display"
                    changePriority={changePriority}
                    toggleMenu={this.toggleMenu} />
                <TaskMenu className="task-menu"
                    view={this.state.view}
                    toggleMenu={this.toggleMenu} />
                <PrioritySelect
                    className="priority-select"
                    priority={task.priority}
                    taskId={taskId}
                    changePriority={changePriority}
                    view={this.state.view}
                    toggleMenu={this.toggleMenu}
                    handleStatusChange={handleStatusChange}
                    toggleProgressbar={this.toggleProgressbar} />
            </div>
        )
    }

    toggleMenu = (newView) => {
        this.setState({
            view: newView
        })
    }

    toggleProgressbar = (isVisible) => {
        this.setState({
            showProgress: isVisible
        })
    }
}

export default TaskCard;