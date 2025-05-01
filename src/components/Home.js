import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card">
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
          Welcome to Team Phoenix
        </h2>
        <div className="team-intro" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>Our Team Members:</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div className="team-member-card">
              <h4>Harsh Sahu</h4>
              <p>Team Lead & Full Stack Developer</p>
            </div>
            <div className="team-member-card">
              <h4>Khushal Rathi</h4>
              <p>Backend Developer</p>
            </div>
            <div className="team-member-card">
              <h4>Yash Raj Nanda</h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <p style={{ marginBottom: '2rem', lineHeight: '1.6', color: 'var(--text-light)' }}>
          Welcome to our team management platform. This application helps you manage team members
          efficiently with features like adding new members, viewing existing members, and
          accessing detailed information about each team member.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/add')}
            style={{ minWidth: '150px' }}
          >
            Add New Member
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/members')}
            style={{ minWidth: '150px' }}
          >
            View All Members
          </button>
        </div>
      </div>

      <style>{`
        .team-member-card {
          background: var(--background-color);
          padding: 1.5rem;
          border-radius: 0.75rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .team-member-card:hover {
          transform: translateY(-5px);
        }

        .team-member-card h4 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .team-member-card p {
          color: var(--text-light);
        }
      `}</style>
    </div>
  );
}

export default Home; 