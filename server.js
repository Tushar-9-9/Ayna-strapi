require('dotenv').config();

const express = require('express'); // Only if you need Express for additional routing, otherwise omit this
const { createServer } = require('http');
const createWebSocketServer = require('./websocket'); // Adjust the path if necessary

// Initialize Express app (optional, if you need it)
const app = express();

// Create an HTTP server (optional with Express)
const httpServer = createServer(app);

// Create a WebSocket server on port 8080
createWebSocketServer(httpServer);

// Listen on port 8080
httpServer.listen(process.env.WS_PORT || 8080, () => {
  console.log(`WebSocket server running on ws://localhost:${process.env.WS_PORT || 8080}`);
});