# Carbon Footprint tracker Platform

A gamified platform where users can compare and compete to reduce their carbon footprints.

## Features
- Users log daily activities (travel, energy, food, shopping)
- Calculates carbon footprint using sustainability APIs (e.g., Climatiq,)
- Leaderboards, badges, and weekly challenges
- Points system: less CO₂ = more points
A gamified web platform that motivates individuals and communities to reduce their carbon footprint by tracking daily activities, earning points, and competing in eco-friendly challenges. By making sustainability fun and measurable, it encourages behavioral changes that help combat climate change.

What It Does
Tracks Lifestyle Impact – Users log their daily activities, including:

Travel: Car, bike, public transport, flights

Energy: Home electricity, heating, renewable usage

Food Choices: Meat consumption, plant-based meals, local vs. imported

Shopping: Clothing, electronics, and other purchases

Calculates Carbon Emissions – Uses trusted sustainability APIs like Climatiq and Carbon Interface to provide real-time carbon impact data based on activity type and quantity.

Gamifies Sustainability –

Leaderboards highlight top eco-friendly users.

Badges reward milestones (e.g., First 100 kg CO₂ saved).

Weekly and monthly challenges encourage ongoing engagement.

Points system: Lower CO₂ = Higher Points, fostering friendly competition.

Provides Insights & Education – Users can view reports, learn tips to reduce their footprint, and make informed choices.

Why It’s Beneficial
For the Environment:
Encourages sustainable choices like using public transport, reducing meat intake, and conserving energy.

Helps users understand their personal contribution to climate change.

Promotes collective action, where even small daily choices add up to significant CO₂ reductions across a community.

For People & Communities:
Motivates Positive Change: Turning sustainability into a game makes eco-friendly habits more engaging.

Fosters Healthy Competition: Leaderboards and challenges keep users motivated.

Promotes Awareness: Users become conscious of their lifestyle’s environmental cost and learn how to reduce it.

Community Impact: Companies, schools, or friend groups can run shared challenges, encouraging teamwork for a greener future.

Potential Rewards: Can be extended to include partnerships where users earn discounts or perks for sustainable actions (e.g., eco-friendly brands).

Key Outcomes
By using Carbon Challenge, users can:

Measure their carbon footprint with reliable data.

Reduce emissions through actionable recommendations.

Compete & Collaborate with others to build sustainable habits.

Visualize how individual changes contribute to global climate goals.

Would you like me to:

Turn this into a visually styled README with badges (for build, tech, license), screenshots, and a demo section?

Add real-world use cases (e.g., how schools, companies, or cities could use this to run sustainability campaigns)?

Include a section on how the point system and challenges can be monetized or rewarded (like vouchers, carbon credits)?

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