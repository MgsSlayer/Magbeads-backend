const { v4: uuid } = require('uuid');
const { format } = require('date-fns');
const path = require('path');
const fspromises = require('fs').promises;

exports.logger = async(message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try{
        if(!existsSync(path.join(__dirname, 'logs'))){
            await fspromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fspromises.appendFile(path.join(__dirname, 'logs', 'logs.txt'), logItem);
    }
    catch(err){
        console.error(`Error: ${err.message}`);
    }
}