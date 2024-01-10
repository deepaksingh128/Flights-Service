const CrudRepository = require('./crud-repository');
const { City } = require('../models');

class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }

    // we can write raw/custom queries:-
}

module.exports = CityRepository;