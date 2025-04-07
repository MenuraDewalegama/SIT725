const Car = require('../models/carModel');
const carService = require('../services/carService');

const getAllCars = async (req, res) => {
    const cars = await Car.find({});
    res.json({ statusCode: 200, data: cars, message: 'Success' });
}

const addSampleCars = async (req, res) => {
    carService.sampleCar.save().then(() => console.log("Sample project saved!"));
    carService.sampleCar3.save().then(() => console.log("Sample project saved!"));
}

module.exports = {
    getAllCars,
    addSampleCars
}