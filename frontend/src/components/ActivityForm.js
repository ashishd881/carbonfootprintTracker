import React, { useState } from 'react';

function ActivityForm({ onSubmit }) {
  const [type, setType] = useState('travel');
  const [details, setDetails] = useState('');
  const [carbon, setCarbon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, details, carbon_kg: parseFloat(carbon) });
    setDetails('');
    setCarbon('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Activity</h2>
      <label>
        Type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="travel">Travel</option>
          <option value="energy">Energy</option>
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
        </select>
      </label>
      <br />
      <label>
        Details:
        <input value={details} onChange={e => setDetails(e.target.value)} />
      </label>
      <br />
      <label>
        Carbon (kg):
        <input type="number" value={carbon} onChange={e => setCarbon(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Activity</button>
    </form>
  );
}

export default ActivityForm; 