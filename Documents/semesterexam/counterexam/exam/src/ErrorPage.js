import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function ErrorPage() {
  return (
    <div className='errorPage'>
      <p>Error Occurred</p>
      <h2>404 Page</h2>
      <p>Page not found.</p>
      <Link to="/home" className='goBackToHome'>Go back to Home</Link>
    </div>
  );
}

export default ErrorPage;
