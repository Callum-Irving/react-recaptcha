const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Express stuff
const PORT = process.env.port || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
	cors: {
		origin: '*',
	},
});

io.on('connection', (socket) => {
	console.log('Client connected');

	socket.on('send-chat-message', (message) => {
		socket.broadcast.emit('chat-message', message);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});

app.get('/', (req, res) => {
	res.send('Get at /');
});

server.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}/`);
});
