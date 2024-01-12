const CrudRepository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    // we can write raw/custom queries:-

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
        });
        return response;
    }
}

module.exports = FlightRepository;