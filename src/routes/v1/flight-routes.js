const express = require('express');

const { FlightController } = require('../../controllers/index');
const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();


// /api/v1/flights  :POST
router.post('/',
        FlightMiddlewares.validateCreateRequest, 
        FlightController.createFlight);


module.exports = router;