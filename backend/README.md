# Carbon Challenge Platform

A gamified platform where users can compare and compete to reduce their carbon footprints.

## Features
- Users log daily activities (travel, energy, food, shopping)
- Calculates carbon footprint using sustainability APIs (e.g., Climatiq,)
- Leaderboards, badges, and weekly challenges
- Points system: less CO₂ = more points

## Tech Stack
- **Backend:** Node.js (Express)
- **Frontend:** React
- **Database:** MongoDB

## Project Structure
```
carbon-challenge/
│
├── backend/
│   ├── models/         # Mongoose models (User, Activity, Badge, etc.)
│   ├── routes/         # Express routes (auth, activities, leaderboard)
│   ├── controllers/    # Route logic
│   ├── services/       # API integrations (Climatiq, Carbon Interface, etc.)
│   ├── utils/          # Helper functions (gamification logic, etc.)
│   ├── app.js          # Express app setup
│   └── .env            # API keys, DB URI
│
├── frontend/
│   ├── src/
│   │   ├── components/ # React components (Leaderboard, Badges, ActivityForm)
│   │   ├── pages/      # Main pages (Home, Profile, Challenge)
│   │   ├── api/        # API calls to backend
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│
├── package.json        # Project metadata and scripts
└── README.md
``` 