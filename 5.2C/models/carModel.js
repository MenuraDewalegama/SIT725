const mongoose = require('mongoose');

// 2. Define your schema and model
const CarSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;