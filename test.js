require('dotenv').config();
const log = console.log;
const express = require('express');
const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res) => {

    res.status(200).send('Hello Server')
    
})




app.listen(PORT, () => {
    log(`Server is running on port ${PORT}`)
})