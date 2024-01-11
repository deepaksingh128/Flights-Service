const CrudRepository = require('./crud-repository');
const { Airport } = require('../models');

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }

    // we can write raw/custom queries:-
}

module.exports = AirportRepository;