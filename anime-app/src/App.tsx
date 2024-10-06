import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import WatchLaterPage from './pages/WatchLaterPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watch-later">Watch Later</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/watch-later" element={<WatchLaterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
