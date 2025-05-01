import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddMember from './components/AddMember';
import ViewMembers from './components/ViewMembers';
import MemberDetails from './components/MemberDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <div className="header-content">
            <h1>Team Phoenix</h1>
            <p className="team-members">
              Harsh Sahu • Khushal Rathi • Yash Raj Nanda
            </p>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/add">Add Member</Link>
              <Link to="/members">View Members</Link>
            </nav>
          </div>
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMember />} />
            <Route path="/members" element={<ViewMembers />} />
            <Route path="/members/:id" element={<MemberDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 