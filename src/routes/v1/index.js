const express = require('express');

const { InfoController } = require('../../controllers');  
       // requiring the controller (i.e. last middleware) 
       // do not forget to destructure the above thing
       
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes =  require('./airport-routes');

const router = express.Router(); 

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);

router.get('/info', InfoController.info);


module.exports = router;