var express = require("express")
var app = express()
var port = process.env.port || 3004
const mongoose = require('mongoose');
const carRoute = require('./routes/carRoute');

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

// 4. Start server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

