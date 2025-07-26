// Points = inverse of CO2 (less CO2 = more points)
function calculatePoints(carbon_kg) {
  return Math.max(0, 100 - Math.round(carbon_kg));
}

// Example badge logic
function getBadges(user) {
  const badges = [];
  const totalSaved = user.carbonData.reduce((sum, entry) => sum + entry.carbon_kg, 0);
  if (totalSaved < 100) badges.push('First 100kg Saved');
  // Add more badge logic as needed
  return badges;
}

module.exports = { calculatePoints, getBadges }; 