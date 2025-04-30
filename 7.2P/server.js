var express = require("express")
var app = express()
var port = process.env.port || 3004
const mongoose = require('mongoose');
const carRoute = require('./routes/carRoute');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server);

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/api/cars', carRoute);
app.use('/cars', carRoute());


mongoose.connect('mongodb://localhost:27017/carDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);

});

// 4. Start server
server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

