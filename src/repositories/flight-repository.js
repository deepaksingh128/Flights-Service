const CrudRepository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    // we can write raw/custom queries:-
}

module.exports = FlightRepository;