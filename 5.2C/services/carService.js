const Car = require('../models/carModel');

const sampleCar = new Car({
    title: "Car 2",
    image: "images/car2.jpg",
    link: "About Car 2",
    description: "This is car 2"
});

const sampleCar3 = new Car({
    title: "Car 3",
    image: "images/car3.jpg",
    link: "About Car 3",
    description: "This is car 3"
});

module.exports = {
    sampleCar,
    sampleCar3
}