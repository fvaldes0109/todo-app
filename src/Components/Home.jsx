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
        { id: 1, text: 'Tarea de prueba 1', completed: false },
        { id: 2, text: 'Tarea de prueba 2', completed: true },
        { id: 3, text: 'Tarea de prueba 3', completed: false },
      ],
      nextId: 4,
      activeFilter: 0,
    }

    this.setActiveFilter = this.setActiveFilter.bind(this);
  }
  
  addTask(e) {

    if (e.key === 'Enter' && e.target.value.length > 0) {
      
      this.setState({ tasks: [...this.state.tasks, { text: e.target.value, completed: this.state.newTaskCompleted, id: this.state.nextId }],
                      newTaskCompleted: false,
                      nextId: this.state.nextId + 1,
      });

      e.target.value = '';
    }
  }
  
  deleteTask(id) {
    
    this.setState({ tasks: this.state.tasks.filter((task, index) => task.id !== id)});
  }

  clearCompleted() {

    this.setState({ tasks: this.state.tasks.filter((task, index) => !task.completed)});
  }

  toggleNewTask() {
    this.setState({ newTaskCompleted: !this.state.newTaskCompleted });
  }

  toggleTaskStatus(id) {

    this.setState({ tasks: this.state.tasks.map(task => {

      if (task.id === id) {
        return { id: task.id, text: task.text, completed: !task.completed };
      }
      else return task;
    })});
  }

  setActiveFilter(newFilter) {

    this.setState({ activeFilter: newFilter });
  }

  render() {

    const filter = this.state.activeFilter;
    const taskList = this.state.tasks.filter(task => filter === 0 || (filter === 1 && !task.completed) || (filter === 2 && task.completed))
                                     .map(task => {
                                        return <Task
                                                  key={task.id}
                                                  id={task.id}
                                                  text={task.text}
                                                  completed={task.completed}
                                                  deleteTask={this.deleteTask.bind(this)} 
                                                  toggleTaskStatus={this.toggleTaskStatus.bind(this)}
                                                />
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
                <span className={this.state.activeFilter === 0 ? 'active-filter' : ''} onClick={() => this.setActiveFilter(0)}>All</span>
                <span className={this.state.activeFilter === 1 ? 'active-filter' : ''} onClick={() => this.setActiveFilter(1)}>Active</span>
                <span className={this.state.activeFilter === 2 ? 'active-filter' : ''} onClick={() => this.setActiveFilter(2)}>Completed</span>
              </div>
              <span className='clear-link' onClick={this.clearCompleted.bind(this)}>Clear Completed</span>
            </div>
          </div>
        </main>
      </>
    );
  }
}