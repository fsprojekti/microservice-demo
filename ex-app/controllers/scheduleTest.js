import schedule from 'node-schedule'
import { krmilnikdb as db } from '../database/ldb.js';

const jsonData = [
    {"d": 4, "t": "12:50:00", "T": 61},
    {"d": 4, "t": "12:50:10", "T": 62},
    {"d": 4, "t": "12:50:20", "T": 63},
    {"d": 4, "t": "12:50:30", "T": 64},
    {"d": 4, "t": "12:50:40", "T": 65},
    {"d": 4, "t": "12:50:50", "T": 66},
    {"d": 4, "t": "12:50:59", "T": 67}
]

function scheduleJobs(data) {
    data.forEach(element => {
        const dayOfWeek = element.d;
        const t = element.t;
        const date = new Date(`1970-01-01T${t}`);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const temp = element.T;
        const cronTimePattern = `${seconds} ${minutes} ${+hours} * * ${+dayOfWeek}`;
        // const cronTimePattern = `10 * * * * ${+dayOfWeek}`;
        console.log(cronTimePattern)
        schedule.scheduleJob(cronTimePattern, function() {
            console.log(temp);
        });
    });
}

scheduleJobs(jsonData);
