const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch(error) {
        console.log(error); /// to debug and handle errors properly
        if(error.name == 'SequelizeValidationError') {
            let explaination = [];
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            // console.log(explaination);
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const airport = await airplaneRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of the airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of the airport');
    }
}

async function updateAirport(id, data) {
    try {
        const response = await airportRepository.update(id, data);
        if(response && response[0] === 0) {
            throw new AppError('The airport you requested to update does not exist', StatusCodes.BAD_REQUEST);
        } else{
            return response;
        }
    } catch (error) {
        throw new AppError('Cannot fetch data of the airport');
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}