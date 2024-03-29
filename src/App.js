import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

class App extends React.Component {

  state = {
    tasks: [
      {
        title: 'Order Coffee Beans',
        desc: 'Process description',
        workers: 0,
        priority: 0,
        status: 'unassigned',
        progress: 0,
      },
      {
        title: 'Order Coffee Beans',
        desc: 'Process description',
        workers: 0,
        priority: 0,
        status: 'unassigned',
        progress: 0,
      },
      {
        title: 'Order Coffee Beans',
        desc: 'Process description',
        workers: 0,
        priority: 0,
        status: 'unassigned',
        progress: 0,
      },
    ],
    filteredTasks: [],
    showSidebar: false,
    showModal: false,
  }

  render() {
    const { tasks, filteredTasks } = this.state;
    return (
      <div className="App">
        <Sidebar
          className="sidebar-big"
          show={true}
          toggleShowModal={this.toggleShowModal}
          filterTasks={this.filterTasks} />
        <Sidebar
          className="sidebar-small"
          show={this.state.showSidebar}
          toggleShowModal={this.toggleShowModal}
          filterTasks={this.filterTasks} />

        <div className="main-content">
          <header>
            <h1 className="header">Tasks</h1>
          </header>
          <i onClick={this.toggleSidebar} className="fas fa-bars sidebar-toggle"></i>
          <TaskList
            tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
            changePriority={this.changePriority}
            handleStatusChange={this.handleStatusChange} />
        </div>
        <AddTaskModal
          className="add-task-modal"
          showModal={this.state.showModal}
          handleNewTask={this.handleNewTask}
          toggleShowModal={this.toggleShowModal} />
      </div>
    );
  }

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }

  changePriority = (e, amount, taskId) => {
    e.preventDefault();
    this.setState(prevState => {
      prevState.tasks[taskId].priority = amount;
      return { tasks: prevState.tasks }
    })
  }

  handleStatusChange = (taskId, status) => {
    this.setState((prevState) => {
      const currentTask = prevState.tasks[taskId];
      currentTask.status = status;

      if (currentTask.priority === 1) {
        currentTask.workers = 6
      } else if (currentTask.priority === 2) {
        currentTask.workers = 12
      } else if (currentTask.priority === 3) {
        currentTask.workers = 25
      } else {
        currentTask.workers = 0
      }
      currentTask.progress = 60;
      return { tasks: prevState.tasks }
    })
  }

  toggleShowModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  handleNewTask = (title, desc) => {
    const newTask = {
      title,
      desc,
      workers: 0,
      priority: 0,
      status: 'unassigned',
      progress: 0,
    }
    if (title && desc) {
      this.setState((prevState) => {
        prevState.tasks.unshift(newTask)
        return { tasks: prevState.tasks }
      })
      this.toggleShowModal()
    }
  }

  filterTasks = (e) => {
    let { value } = e.target;
    value = value.toLowerCase();
    const filteredTasks = this.state.tasks.filter(task => {
      if (task.title.toLowerCase().match(value) || task.desc.toLowerCase().match(value)) {
        return task
      }
    })
    this.setState({
      filteredTasks: filteredTasks
    })
  }

}

export default App;
