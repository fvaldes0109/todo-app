import React from 'react';

import icon_moon from '../Assets/images/icon-moon.svg';
import bg_desktop_light from '../Assets/images/bg-desktop-light.jpg';
import Checkbox from './Checkbox';
import Task from './Task';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      newTaskCompleted: false,
      tasks: [
        { text: 'Tarea de prueba 1', completed: false },
        { text: 'Tarea de prueba 2', completed: true },
        { text: 'Tarea de prueba 3', completed: false },
      ],
    }
  }
  

  addTask(e) {

    if (e.key === 'Enter' && e.target.value.length > 0) {
      
      this.setState({ tasks: [...this.state.tasks, { text: e.target.value, completed: this.state.newTaskCompleted }],
                      newTaskCompleted: false,
      });

      e.target.value = '';
    }
  }

  deleteTask(id) {
    
    this.setState({ tasks: this.state.tasks.filter((task, index) => index !== id)});
  }

  toggleNewTask() {
    this.setState({ newTaskCompleted: !this.state.newTaskCompleted });
  }

  render() {

    const taskList = this.state.tasks.map((task, index) => {
      return <Task key={index} id={index} text={task.text} completed={task.completed} deleteTask={this.deleteTask.bind(this)} />
    });

    return (
      <>
        <div className="bg-image">
          <img src={bg_desktop_light} alt="background" />
        </div>

        <header>
          <h1>TODO</h1>
          <img src={icon_moon} alt="icon_moon" aria-label='Toggle dark mode'/>
        </header>

        <main>
          <div className='input-area white'>
            <Checkbox toggleStatus={this.toggleNewTask.bind(this)} selected={this.state.newTaskCompleted} />
            <input className='text' placeholder='Create a new todo...' onKeyDown={this.addTask.bind(this)} />
          </div>

          <div className='tasks-area white'>
            
            {taskList}

            <div className='tasks-footer'>
              <span>{this.state.tasks.length} items left</span>
              <div className='selectors'>
                {/* Replace for NavLink */}
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
              </div>
              <span className='clear-link'>Clear Completed</span>
            </div>
          </div>
        </main>
      </>
    );
  }
}