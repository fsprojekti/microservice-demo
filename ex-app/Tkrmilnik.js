import schedule from 'node-schedule';
import { krmilnikdb as db } from '/home/cena/microservice-demo/ex-app/database/ldb.js';
import * as i2cFun from '/home/cena/microservice-demo/i2c2/export.js'


db.read();
const jsonData = db.data;


function scheduleJobs(data) {
    data.forEach(element => {
        const date = new Date(element.d);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const temp = element.T;
        const cronTimePattern = `${seconds} ${minutes} ${hours} * * ${date.getDay()}`;
        console.log(cronTimePattern);
        schedule.scheduleJob(cronTimePattern, function () {
            const now = new Date();
            console.log(`Scheduled time: ${element.d}, Current time: ${now.toLocaleString()}, Temperature: ${temp}`);
            i2cFun.slaveSender(temp)
        });
    });
}

scheduleJobs(jsonData);
