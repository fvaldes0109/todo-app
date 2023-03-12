import React from 'react';

import icon_moon from '../Assets/images/icon-moon.svg';
import bg_desktop_light from '../Assets/images/bg-desktop-light.jpg';
import Checkbox from './Checkbox';


export default class Home extends React.Component {

  render() {
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
            <Checkbox />
            <input className='text' placeholder='Create a new todo...' />
          </div>

          <div className='tasks-area white'>
            

            <div className='tasks-footer'>
              <span>5 items left</span>
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