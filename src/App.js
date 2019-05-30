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
    showSidebar: true
  }

  render() {
    return (
      <div className="App">
        <Sidebar show={this.state.showSidebar} />
        <div className="main-content">
          <header>
            <h1 className="header">Tasks</h1>
          </header>
          <button onClick={this.handleClick} >show/hide</button>
          <TaskList tasks={this.state.tasks} changePriority={this.changePriority} />
        </div>
      </div>
    );
  }

  handleClick = () => {
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

}

export default App;
