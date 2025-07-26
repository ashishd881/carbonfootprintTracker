// Example: fetch leaderboard, activities, etc.
export async function fetchLeaderboard() {
  const res = await fetch('/api/leaderboard');
  return res.json();
}

// Add more API calls as needed 