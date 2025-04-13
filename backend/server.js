const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const initSocket = require('./config/socket');
const { initRedis } = require('./config/redis');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);
initSocket(server);

// Ensure graceful error handling in case of connection failure
connectDB().catch((err) => {
  console.error('MongoDB connection failed:', err);
  process.exit(1);  // Exit the server if DB connection fails
});

initRedis()
  .catch((err) => {
    console.error('Redis connection failed:', err);
    process.exit(1);  // Exit the server if Redis connection fails
  });

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
