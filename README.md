# 🗓️ Simple Calendar - MERN Stack Event Scheduler

## Overview

Hello! I'm a web developer, and this project is my solution to building a **calendar-based event scheduling application** using the **MERN (MongoDB, Express, React, Node.js)** stack.

This app allows users to log in with a simple username (no password), and then create, view, edit, and delete calendar events. The project demonstrates my knowledge of full-stack development, state management, API integration, and UI design using **React Big Calendar**.

The application is fully responsive and automatically syncs data to/from the MongoDB database in real-time per user.

---

## 🔗 Live Demo

- **Frontend**: [https://calendar-frontend-5ww9.onrender.com](https://calendar-frontend-5ww9.onrender.com)
- **Backend**: [https://calendar-backend-e5t6.onrender.com](https://calendar-backend-e5t6.onrender.com)

---

## 📌 Features Implemented

### 1. **Login Page**
- Login using only a **username** (no password required).
- Username-based session — all events are tied to the entered username.
- Example test login:
  - **Username**: `aditya`

### 2. **Calendar Event Management**
- 📅 **Create** new events by clicking and selecting a time slot on the calendar.
- ✏️ **Edit** events by clicking on them.
- 🗑️ **Delete** events you no longer need.
- ⚠️ Events **cannot be created in the past**.
- 🔄 Events are **fetched automatically from MongoDB** on login.

### 3. **User-Based Event Isolation**
- Each user has access only to their own events.
- Events are stored in the database under their respective usernames.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Big Calendar, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Deployment**: Render (Frontend + Backend)

---

## 🧪 Test Routes (Backend)

- ✅ Fetch all events for a user:  
  `GET https://calendar-backend-e5t6.onrender.com/events/user/aditya`

- 🏠 General route to list all events (if publicly accessible):  
  `GET https://calendar-backend-e5t6.onrender.com/events`

---

## 🖥️ Local Development Setup

### 🔧 Prerequisites

Ensure the following are installed on your system before you begin:

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [MongoDB](https://www.mongodb.com/) (local installation or [MongoDB Atlas](https://www.mongodb.com/atlas/database))
- npm (comes with Node.js)

---

### 📁 Clone the Repository

```bash
git clone https://github.com/your-username/calendar-app.git
cd calendar-app
```
# 📂 This project has two main folders:

/frontend — React app (client)

/backend — Express API server

# 🚀 Backend Setup (Node.js + Express + MongoDB)
Navigate to the backend directory:

```bash
cd backend
```
Install dependencies:

```bash
npm install
```
Create a .env file in the /backend directory and add the MongoDB URI:
```bash
MONGODB_URI=mongodb://localhost:27017/calendarDB
```

Start the backend server:
```bash
npm start
```
The backend server will run at: http://localhost:4000

##🌐 Frontend Setup (React + React Big Calendar)
Open a new terminal and navigate to the frontend directory:

cd ../frontend
Install dependencies:

```bash
npm install
```
Start the React development server:
```bash

npm run dev
The frontend will run at: http://localhost:5173
```

🧪 Example Login for Testing
On the login page, use the following username to test:

Username: aditya

Or use any custom username like john, alice, etc. Each user has their own isolated calendar and events.
