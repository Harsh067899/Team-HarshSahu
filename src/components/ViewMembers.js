import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/members');
        setMembers(response.data);
      } catch (err) {
        setError('Error fetching members');
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h2>Team Members</h2>
      {error && <div className="error">{error}</div>}
      <div className="member-grid">
        {members.map((member) => (
          <div key={member._id} className="member-card">
            <img
              src={member.profileImage ? `http://localhost:5000/${member.profileImage}` : 'https://via.placeholder.com/150'}
              alt={member.name}
              className="member-image"
            />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/members/${member._id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {members.length === 0 && !error && (
        <p>No team members found. Add some members to get started!</p>
      )}
    </div>
  );
}

export default ViewMembers; 