import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';

class App extends React.Component {

  state = {
    tasks: [
      {
        title: 'Buy Coffee Beans',
        desc: 'hot lava java',
        workers: 0,
        priority: 0,
        status: 'unassigned',
        progress: 0,
      },
      {
        title: 'Email Everyone',
        desc: 'just to say hi yno',
        workers: 0,
        priority: 0,
        status: 'unassigned',
        progress: 0,
      },
      {
        title: 'Play mariokart',
        desc: 'baggsy bowser',
        workers: 0,
        priority: 0,
        status: 'unassigned',
        progress: 0,
      },
      {
        title: 'Shoot some hoops',
        desc: 'because everyone loves basketball',
        workers: 0,
        priority: 0,
        status: 'unassigned',
        progress: 0,
      }
    ],
    showSidebar: false
  }

  render() {
    return (
      <div className="App">
        <Sidebar className="sidebar-big" show={true} />
        <Sidebar className="sidebar-small" show={this.state.showSidebar} />
        <div className="main-content">
          <header>
            <h1 className="header">Tasks</h1>
          </header>
          <i onClick={this.toggleSidebar} className="fas fa-bars sidebar-toggle"></i>
          {/* <button onClick={this.handleClick} >show/hide</button> */}
          <TaskList tasks={this.state.tasks} changePriority={this.changePriority} handleStatusChange={this.handleStatusChange} />
        </div>
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

}

export default App;
