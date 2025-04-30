const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// router.get('/api/cars', carController.getAllCars);
// router.get('/', carController.getAllCars);
// router.post('/', carController.addSampleCars);


module.exports = () => {
    router.get('/', carController.getAllCars);
    router.get('/add', carController.addSampleCars);
    return router;    
}