const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const initSocket = require('./config/socket');
const { initRedis } = require('./config/redis');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);
initSocket(server);


connectDB().catch((err) => {
  console.error('MongoDB connection failed:', err);
  process.exit(1); 
});

initRedis()
  .catch((err) => {
    console.error('Redis connection failed:', err);
    process.exit(1);  
  });

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
