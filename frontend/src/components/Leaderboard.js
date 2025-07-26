import React from 'react';

function Leaderboard({ users }) {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {users.map((user, idx) => (
          <li key={user._id || idx}>
            {user.username}: {user.points} points
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard; 