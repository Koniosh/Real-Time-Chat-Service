Frontend (React)
│
├── App (Main App Wrapper)
│
├── Router
│   ├── /login
│   ├── /register
│   ├── /chat
│   └── /profile
│
├── Components
│   ├── Auth
│   │   ├── LoginForm
│   │   └── RegisterForm
│   │
│   ├── Chat
│   │   ├── ChatWindow
│   │   ├── MessageInput
│   │   ├── MessageBubble
│   │   ├── TypingIndicator
│   │   └── ChatHeader
│      
│
├── Services (API & WebSocket Logic)
│   ├── api/
│   │   ├── authService.js         // login, register
│   │   ├── userService.js         // profile, user list
│   │   ├── chatService.js         // chat history
│   │   └── notificationService.js // toast / in-app notifications
│   │
│   └── socket/
│       ├── socket.js              // socket.io instance & setup
│       ├── events.js              // emits/listeners for message, typing, etc.
│       └── hooks.js               // custom hooks like useSocketEvent
│
├── State Management
│   ├── store/ 
│   │   ├── index.js (Redux or Context API)
│   │   ├── authSlice.js
│   │   ├── userSlice.js
│   │   ├── chatSlice.js
│   │   └── notificationSlice.js
│
├── Assets
│   ├── images/
│   ├── icons/
│   └── styles/
│       ├── variables.css
│       ├── layout.css
│       └── components.css
│
└── Utils
    ├── validators.js
    ├── formatters.js
    
