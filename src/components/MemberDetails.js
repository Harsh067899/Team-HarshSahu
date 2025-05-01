import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function MemberDetails() {
  const [member, setMember] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(response.data);
      } catch (err) {
        setError('Error fetching member details');
      }
    };

    fetchMember();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <img
          src={member.profileImage ? `http://localhost:5000/${member.profileImage}` : 'https://via.placeholder.com/150'}
          alt={member.name}
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
        <div>
          <h2>{member.name}</h2>
          <p><strong>Role:</strong> {member.role}</p>
          <p><strong>Email:</strong> {member.email}</p>
          <p><strong>Member since:</strong> {new Date(member.createdAt).toLocaleDateString()}</p>
          
          <button
            className="btn btn-primary"
            onClick={() => navigate('/members')}
            style={{ marginTop: '1rem' }}
          >
            Back to Members
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails; 