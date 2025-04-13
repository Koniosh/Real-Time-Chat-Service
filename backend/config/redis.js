const { createClient } = require('redis');

let redisClient;

const initRedis = async () => {
  redisClient = createClient({
    url: 'redis://localhost:6379',  // or replace with your Redis server URL
  });

  redisClient.on('error', (err) => {
    console.error('Redis error:', err);
    process.exit(1); // Exit the server if Redis is not available
  });

  await redisClient.connect(); // Ensure connection to Redis is successful
  console.log('Redis connected!');
};

module.exports = { initRedis };
