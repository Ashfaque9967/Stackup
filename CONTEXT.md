# Project Context — Stackup

## What is this app
A full-stack web app for self-taught developers to track their learning journey, projects, DSA progress, job applications, and daily logs. Public app — real users.

## Tech Stack
- Frontend: React + Module CSS (Vite) — NOT Tailwind
- Backend: Node.js + Express
- Database: PostgreSQL
- Auth: JWT
- Deploy: Vercel (frontend) + Render (backend)

## Current Status
[x] Database schema
[x] Backend folder structure
[x] Express server setup
[x] PostgreSQL connection (pg + pool)
[x] POST /auth/register
[x] POST /auth/login
[x] GET /auth/me — protected route + JWT middleware
[ ] React + Vite setup (client folder)
[ ] Login + Register page (frontend)
[ ] Skill tracker module
[ ] Daily log module
[ ] Project tracker module
[ ] DSA tracker module
[ ] Job application tracker
[ ] Dashboard + analytics
[ ] Public launch

## What we built last session
- server/ folder structure banaya — routes, controllers, middleware, db
- Express server setup kiya index.js mein
- PostgreSQL ko Node se connect kiya — pg Pool use karke
- ES Modules use kar rahe hain (type: module in package.json)
- POST /auth/register — bcrypt hashing, JWT
- POST /auth/login — bcrypt compare, JWT
- GET /auth/me — authMiddleware se protected
- Thunder Client se sab APIs test kiye

## Important decisions made
- Public app from day 1
- PostgreSQL not MongoDB
- JWT auth (single token, 7d expiry)
- ES Modules — CommonJS nahi
- Module CSS — Tailwind nahi
- Ship early, improve with feedback

## File structure
stackup/
├── client/          ← React app (Vite) — abhi empty
├── server/
│   ├── src/
│   │   ├── routes/
│   │   │   └── auth.js
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   └── db/
│   │       └── pool.js
│   ├── index.js
│   ├── .env
│   └── package.json
└── README.md

## Next session
1. React + Vite setup — client/ folder
2. Register page banana
3. Login page banana
4. JWT token frontend pe store karna
5. Protected route setup — React side