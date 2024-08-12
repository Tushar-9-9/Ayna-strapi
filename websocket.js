const WebSocket = require('ws');

const createWebSocketServer = (httpServer) => {
    const wsServer = new WebSocket.Server({ server: httpServer });

    wsServer.on('connection', (ws) => {
        console.log('Client connected');

        // Send a welcome message when a client connects
        ws.send('Welcome to the WebSocket server!');

        ws.on('message', async (message) => {
            console.log('Received message:', message);

            try {
                // Save the message to the database or perform any other actions
                // Example: await Message.create({ text: message, fromUserId: userId });

                // Echo the message back to the client
                ws.send(`Server received: ${message}`);
            } catch (error) {
                console.error('Failed to process message:', error);
            }
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });

        ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
    });

    return wsServer;
};

module.exports = createWebSocketServer;
