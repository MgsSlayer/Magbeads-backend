const { v4: uuid } = require('uuid');
const { format } = require('date-fns');
const path = require('path');
const fs = require('fs');   
const fspromises = fs.promises;
const mongoose = require('mongoose');
const { existsSync } = fs;
const express = require('express')

const logEvents = async(message, logname) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try{
        if(!existsSync(path.join(__dirname, '..', 'logs'))){
            await fspromises.mkdir(path.join(__dirname, '..', 'logs'));
        }
        await fspromises.appendFile(path.join(__dirname, '..', 'logs', logname), logItem);
    }
    catch(err){
        console.error(`Error: ${err.message}`);
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}`, 'log.txt');
    next();
}

module.exports = { logEvents, logger };