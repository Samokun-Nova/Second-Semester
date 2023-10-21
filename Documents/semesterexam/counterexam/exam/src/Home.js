import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <div className='homepage'>
      <li className='about'> ALTSCHOOL SECOND SEMESTER EXAM</li>
      <nav>
        <ul>
          <li className='home'>Home Page</li>
          <li className='linkToCounter'>Click to go to <Link to="/counter" className='goToCounter'>Counter App</Link> </li>
          <li className='linkToError'>Link to <Link to="/error-test" className='goToError'>Error 404 Page</Link> </li>
          <li>Link For <Link to='/error-boundary' className='errorBoundary'>Error Boundary Test</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
