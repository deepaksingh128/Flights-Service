const CrudRepository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    // we can write raw/custom queries:-

    async getAllFlights(filter) {
        const response = await Flight.findAll({
            where: filter
        });
        return response;
    }
}

module.exports = FlightRepository;