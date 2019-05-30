import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import TaskCard from './components/TaskCard';

// function App() {
//   return (
//     <div className="App">
//       <Sidebar />

//       <div className="main-content">

//       </div>
//     </div>
//   );
// }

class App extends React.Component {

  state = {
    tasks: [1, 2, 3, 4],
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
          {this.state.tasks.map(task => {
            return <TaskCard key={task} />
          })}
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    })
  }

}

export default App;
