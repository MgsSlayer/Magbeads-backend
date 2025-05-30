require('dotenv').config();
const errorHandler = require('./src/middleware/errorHandler.js');
const { logger } = require('./src/middleware/logEvents.js');
const express = require('express');
const app = express();
const dbconnect = require('./src/config/dbconnection.js')
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('./src/config/corsOptions.js');
const router = require('./src/routes/api/products.route.js')
const log = console.log;
const PORT = process.env.PORT;


dbconnect();


//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: 'false'}));
app.use(logger);
//app.use(express.static(path.join(__dirname, '/public')))

//routes
app.use('/products', require('./src/routes/api/products.route.js'));
app.use ('/product', require('./src/routes/api/products.route.js'));
app.get('/', (req, res) => {
    res.send(`Hello`);
} )



mongoose.connection.once('open', () => {
    log('Database Connected Successfully')
    app.listen(PORT, () => {
        log(`Server running on port: ${PORT}`)});
})

app.use(errorHandler);