```
frontend/
├── App.js
├── index.js
├── router/
│   └── AppRoutes.jsx
├── components/
│   ├── Auth/
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── Chat/
│   │   ├── ChatWindow.jsx
│   │   ├── MessageInput.jsx
│   │   ├── MessageBubble.jsx
│   │   ├── TypingIndicator.jsx
│   │   └── ChatHeader.jsx
│   └── Common/
│       ├── PrivateRoute.jsx
│       └── ErrorBoundary.jsx
├── services/
│   ├── api/
│   │   ├── authService.js
│   │   ├── userService.js
│   │   └── chatService.js
│   └── socket/
│       ├── socket.js
│       ├── events.js
│       └── hooks.js
├── redux/
│   ├── store.js
│   ├── authSlice.js
│   ├── userSlice.js
│   ├── chatSlice.js
│   └── notificationSlice.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
│       ├── variables.css
│       ├── layout.css
│       └── components.css
└── utils/
    ├── validators.js
    └── formatters.js
```
