# Real-Time Chat Application

A full-stack real-time chat website built using **React**, **Node.js**, **Express**, **Socket.IO**, and **MongoDB**. This chat application allows users to create accounts, log in, and engage in real-time one-to-one conversations. It includes features like typing indicators, online presence tracking, and persistent chat history.

> Designed for learning, scalability, and real-world deployment.

---

## Project Overview

This project demonstrates how to build a modern chat application from **frontend to deployment** using WebSocket communication powered by **Socket.IO**. It simulates a minimal version of applications like WhatsApp or Messenger, suitable for individual messaging, real-time collaboration tools, and social platforms.

---

## Features

### Core Features:
- **User Registration & Login** (with JWT authentication)
- **Real-Time One-to-One Chat** (via Socket.IO)
- **Typing Indicator** (when the user is typing)
- **Persistent Chat History** (stored in MongoDB)
- **Online/Offline User Tracking**
- **Responsive UI** (optimized for mobile, tablet, and desktop)

### Bonus Features (optional future add-ons):
- **Group Chat Support**
- **Message Seen Status**
- **Dark Mode Toggle**
- **Media/File Sharing**
- **Push Notifications**

---

## Tech Stack

### Frontend
- **React.js** (SPA architecture)
- **React Router DOM** (routing)
- **Axios** (HTTP requests)
- **Socket.IO Client**
- **CSS / Tailwind / Styled Components**

### Backend
- **Node.js** with **Express.js**
- **Socket.IO Server** (real-time communication)
- **MongoDB** with **Mongoose** (NoSQL database)
- **JWT (JSON Web Tokens)** for authentication
- **Dotenv**, **CORS**, and other Express middlewares

---

## 📁 Folder Structure

chat-app/
├── backend/
│   ├── config/             # DB and JWT config
│   ├── controllers/        # Auth and Chat logic
│   ├── models/             # User and Message schemas
│   ├── routes/             # Express routes
│   ├── socket/             # Socket.IO server handling
│   ├── middlewares/        # JWT Auth, Error Handling
│   └── server.js           # Main backend entry
│
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Login, Chat, Register
│   │   ├── services/       # API calls
│   │   ├── sockets/        # Socket.IO client config
│   │   └── App.js
│   └── public/
│
├── .env
├── README.md
└── package.json


---

## 🔌 API Endpoints

| Endpoint                  | Method | Description           |
|---------------------------|--------|-----------------------|
| `/api/auth/register`      | POST   | Register new user     |
| `/api/auth/login`         | POST   | Login and get JWT     |
| `/api/users`              | GET    | Get all users         |
| `/api/messages`           | POST   | Save message          |
| `/api/messages/:id`       | GET    | Fetch messages with user |

---

## Socket.IO Events

| Event               | Description                          |
|---------------------|--------------------------------------|
| `join`              | Join private room for a user         |
| `sendMessage`       | Emit message to recipient            |
| `receiveMessage`    | Receive message in real-time         |
| `typing`            | Show typing indicator                |
| `onlineUsers`       | Track active users                   |

---

## Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

## Contribution
Want to improve the app? Great!
Feel free to fork this repo and submit a Pull Request.

## License
This project is licensed under the MIT License.



