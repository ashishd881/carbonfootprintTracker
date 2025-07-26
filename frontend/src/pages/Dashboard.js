import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Leaderboard from '../components/Leaderboard';
import Badges from '../components/Badges';
import ActivityForm from '../components/ActivityForm';

const Container = styled.div`
  max-width: 900px;
  margin: 2em auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
`;
const Left = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
`;

function Dashboard() {
  const [user, setUser] = useState({ badges: [], carbonData: [] });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;
    axios.get('/api/activity', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setUser(u => ({ ...u, carbonData: res.data })))
      .catch(() => setError('Could not fetch activities'));
    axios.get('/api/leaderboard')
      .then(res => setUsers(res.data))
      .catch(() => setError('Could not fetch leaderboard'));
    // Fetch badges from user info if available
    axios.get('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setUser(u => ({ ...u, ...res.data })))
      .catch(() => {});
  }, [token]);

  const handleActivitySubmit = async (activity) => {
    try {
      await axios.post('/api/activity', activity, { headers: { Authorization: `Bearer ${token}` } });
      window.location.reload();
    } catch {
      setError('Failed to log activity');
    }
  };

  return (
    <Container>
      <Left>
        <h1>Welcome to your Dashboard</h1>
        <ActivityForm onSubmit={handleActivitySubmit} />
        <h2>Your Activities</h2>
        <div className="card">
          {user.carbonData && user.carbonData.length > 0 ? (
            <ul>
              {user.carbonData.map((a, i) => (
                <li key={i}>{a.date?.slice(0,10)} - {a.activity} - {a.carbon_kg?.toFixed(2)} kg CO₂</li>
              ))}
            </ul>
          ) : <p>No activities logged yet.</p>}
        </div>
      </Left>
      <Right>
        <Leaderboard users={users} />
        <Badges badges={user.badges || []} />
      </Right>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Container>
  );
}

export default Dashboard; 