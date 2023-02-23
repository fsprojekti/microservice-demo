import schedule from 'node-schedule';
import { krmilnikdb as db } from '../database/ldb.js';

const jsonData = [{ 'd': '2023-02-22 21:18:00', 'T': 50.0 },
                    { 'd': '2023-02-22 21:20:00', 'T': 51.0 },
                    { 'd': '2023-02-22 21:22:00', 'T': 52.0 },
                    { 'd': '2023-02-22 21:24:00', 'T': 53.0 },
                    { 'd': '2023-02-22 21:26:00', 'T': 52.0 },
                    { 'd': '2023-02-22 21:28:00', 'T': 50.0 },
                    { 'd': '2023-02-22 21:29:00', 'T': 51.0 }]

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
