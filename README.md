📅 Simple Calendar App
A minimal calendar scheduling app where users can log in with just a username and manage their events. Built using React, Node.js, Express, and MongoDB.

🚀 Live Demo
Try it out now:

🔗 Frontend: https://calendar-frontend-5ww9.onrender.com
🔗 Backend: https://calendar-backend-e5t6.onrender.com

👤 How to Use
Visit the live site.

Enter any username (e.g., aditya) in the login input.

Once logged in, you can:

Create new events by selecting time slots.

Edit or delete existing events.

View all your scheduled events on the calendar.

📝 Note:

You can’t create events in the past.

Username-based login is simple — no password required.

All events are scoped to the username used.

⚙️ Features
📆 Interactive calendar (via react-big-calendar)

🧑 Simple login with just a username

✏️ Create, edit, and delete events

⏱️ Events cannot be scheduled in the past

🔒 Events are user-specific (based on entered username)

🌐 Works both locally and as a deployed full-stack app

🧑‍💻 Run Locally
Prerequisites
Node.js and npm installed

MongoDB running locally or use MongoDB Atlas

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/calendar-app.git
cd calendar-app
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Create .env in backend/ folder:
env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/calendarDB
# or use MongoDB Atlas URI
# MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/calendarDB
Start backend server:

bash
Copy
Edit
npm start
Backend runs on: http://localhost:4000

3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
Frontend runs on: http://localhost:5173

🔧 Deployment (for developers)
The project is deployed using Render.com.

To deploy:

Push the backend and frontend code to GitHub.

Connect frontend and backend repositories to separate Render services:

Frontend: React Static Site

Backend: Web Service (Node)

Set environment variable MONGODB_URI in backend environment settings.

🗃 Tech Stack
Frontend: React, React Big Calendar, Axios

Backend: Node.js, Express, Mongoose

Database: MongoDB

Deployment: Render

🙋 Sample Username
To test quickly:

Username: aditya
Or use any name — your events will be saved for that username only.

📜 License
This project is open-source and free to use.
