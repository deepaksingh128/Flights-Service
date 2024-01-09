const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch(error) {
        // console.log(error); /// to debug and handle errors properly
        if(error.name == 'SequelizeValidationError') {
            let explaination = [];
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            // console.log(explaination);
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}