const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');

const { SuccessResponse, ErrorResponse} = require('../utils/common');

/**
 * POST : /cities
 * req-body  {name : 'London}
 * 
 */
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.CREATED) 
                .json(SuccessResponse);

    } catch(error) {
        // console.log(error); // for debugging purpose
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

async function destroyCity(req, res) {
    try {
        const response = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
}

module.exports = {
    createCity,
    destroyCity
}