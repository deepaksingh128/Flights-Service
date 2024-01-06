const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }

    // we can write raw/custom queries:-
}

module.exports = AirplaneRepository;