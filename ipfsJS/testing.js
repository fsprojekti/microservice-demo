import schedule from "node-schedule";
import moment from 'moment';



let testDate = new Date("2022-11-30T14:54:00");
let cas = new Date();
let dodatek = "16:00:00"
console.log(cas.toLocaleDateString()+", "+dodatek);
console.log(cas.toLocaleString())


schedule.scheduleJob(testDate, function() {
    console.log("dela")
})