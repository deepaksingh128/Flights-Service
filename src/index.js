const express = require('express');
const { Airport, City } = require('.//models');
// const { ServerConfig, Logger } = require('./config');   // NOTE :- Without destructuring , error
const { ServerConfig } = require('./config');

const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);
// app.use('/flightsService/api', apiRoutes);


app.post('/test', function(req, res) {
    res.json({
        msg: req.body.modelNumber,
        msg2: req.body.capacity
    });
})

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server with PORT: ${ServerConfig.PORT}`);
    // Logger.info("Successfully started the server");
});