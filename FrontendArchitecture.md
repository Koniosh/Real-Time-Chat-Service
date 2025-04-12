```
Frontend (React)
    |
    |---> App (Main App Wrapper)
    |
    |---> Router
    |         - /login
    |         - /register
    |         - /chat
    |         - /profile
    |
    |---> Components
    |         ├── Auth
    |         │     - LoginForm
    |         │     - RegisterForm
    |         │
    |         ├── Chat
    |         │     - ChatWindow
    |         │     - MessageInput
    |         │     - MessageBubble
    |         │     - TypingIndicator
    |         │     - ChatHeader
    |
    |---> Services
    |         ├── API Services
    |         │     - authService.js (Login/Register)
    |         │     - userService.js (Profile, Online Users)
    |         │     - chatService.js (Chat History, Groups)
    |         │     - notificationService.js (In-app Notifications)
    |         │
    |         └── WebSocket
    |               - socket.js (Socket.IO Setup)
    |               - events.js (Send/Receive, Typing, Status)
    |               - hooks.js (Custom Hooks for Sockets)
    |
    |---> State Management (Redux / Context API)
    |         - index.js (Store Setup)
    |         - authSlice.js
    |         - userSlice.js
    |         - chatSlice.js
    |         - notificationSlice.js
    |
    |---> Assets
    |         - images/
    |         - icons/
    |         - styles/
    |               - variables.css
    |               - layout.css
    |               - components.css
    |
    └── Utils
              - validators.js (Form Validation)
              - formatters.js (Date, Name, Message Utils)

```