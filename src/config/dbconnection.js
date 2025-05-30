const mongoose = require('mongoose');
require('dotenv').config();


const dbconnect = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECT_STRING);
    }
    catch(err){
        console.error(err)

    }

}

module.exports = dbconnect;