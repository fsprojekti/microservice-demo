import schedule from 'node-schedule';
import { krmilnikdb as db } from './database/ldb.js';


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
        });
    });
}

scheduleJobs(jsonData);
