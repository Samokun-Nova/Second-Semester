import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CounterPage from './CounterPage';
import ErrorBoundary from './ErrorBoundary';
import ErrorPage from './ErrorPage';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/error-test" element={<ErrorPage />} />
          <Route path="/error-boundary" element={<ErrorBoundary />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
