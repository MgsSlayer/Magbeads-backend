const logger = require('./logger');
const EventEmitter = require('events');
const express = require('express');
const app = express();
PORT = 3001;

const log = console.log;
app.set('PORT', PORT);

//middleware
app.use(express.json);
app.use(express.urlencoded({ extended: 'false'}));

class Emitter extends EventEmitter{};
const emitter = new Emitter();

emitter.on('logs', (msg) => logger(msg));
emitter.emit('logs', 'log event emiited');

//routes
app.get('/', (req, res) => {
    res.send(`Hello`);
} )

app.listen(PORT, () => {
    log(`Server running on port: ${PORT}`)
});