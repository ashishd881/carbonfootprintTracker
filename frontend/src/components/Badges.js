import React from 'react';

function Badges({ badges }) {
  return (
    <div>
      <h2>Badges</h2>
      <ul>
        {badges.map((badge, idx) => (
          <li key={idx}>{badge}</li>
        ))}
      </ul>
    </div>
  );
}

export default Badges; 