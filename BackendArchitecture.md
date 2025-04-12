# Backend Architecture Document – Chat Application
### Objective:
To design and build a scalable, secure, and real-time backend for a chat application that supports:
• One-on-One and Group Chats
• Online/Offline Presence
• Chat History
• Message Delivery Status (sent, delivered, seen)
• Typing Indicators
• Notifications 

### Tech Stack:
Backend Framework	- Node.js + Express.js
Real-time Engine -	Socket.IO
Database - 	MongoDB (NoSQL)
Cache & Pub/Sub -	Redis
Auth -	JWT (Token-based Auth)

### System Architecture:

```
Client (React/Vue) 
    |
    |---> REST API (Express)
    |         - Auth (Login/Register)
    |         - User APIs (Profile, Online List)
    |         - Chat APIs (History, Groups)
    |
    |---> WebSocket (Socket.IO)
              - send-message
              - receive-message
              - typing / stop-typing
              - user-online / user-offline
              - message-status-update
              
    Backend Services (Modularized)
      ├── Auth Service
      ├── User Service
      ├── Message Service
      ├── Group Service
      ├── Notification Service
    |
    ├── MongoDB (Chats, Users, Groups)
    └── Redis (Online Users, Pub/Sub, TTL)
```

### Microservice-Like Modular Services

| **Service**        | **Responsibility**                                          |
|--------------------|-------------------------------------------------------------|
| `Auth Service`     | Handles registration, login, JWT generation                 |
| `User Service`     | Tracks online/offline status, fetches user profiles         |
| `Message Service`  | Handles message CRUD, status updates (seen/delivered)       |
| `Group Service`    | Manages groups, members, and group metadata                 |
| `Notification`     | *(Optional)* Sends push/email alerts for offline users      |


###  WebSocket Events

| **Event**         | **Direction**     | **Description**                         |
|-------------------|-------------------|-----------------------------------------|
| `connect`         | Client → Server   | Establish WebSocket connection          |
| `send-message`    | Client → Server   | Send message with metadata              |
| `receive-message` | Server → Client   | Broadcast message to other users        |
| `typing`          | Client ↔ Server   | Typing indicator                        |
| `message-seen`    | Client → Server   | Seen confirmation                       |
| `user-online`     | Server → Client   | Broadcast user online                   |
| `user-offline`    | Server → Client   | Broadcast user offline                  |

### Data Flow (Send Message)
1- Client emits send-message
2- Server validates JWT & saves message in MongoDB
3- Redis used to check if receiver is online
4- Message is:
    . Delivered via WebSocket if user is online
    . Stored for later delivery if offline
5- Status is updated via message-status-update

### Additional Functions:

| **Feature**           | **Tech Suggestion**                        |
|------------------------|--------------------------------------------|
| `Push Notifications`   | Firebase Cloud Messaging                   |
| `Media Storage`        | AWS S3 / Cloudinary                        |
| `Admin Dashboard`      | Role-based access (RBAC)                   |
| `E2E Encryption`       | `crypto-js` or similar encryption libs     |
| `Audit Logging`        | `winston` / Elastic Stack (ELK)            |



