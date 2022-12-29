import { meritvedb as db } from '../database/ldb.js';

export function vseMeritve(req, res) {
    db.read();
    return res.json(db.data);
}


export function specDate(req, res) {
    const dateString = req.params.date;
    const targetday = new Date(dateString)
    db.read();
    const result = req.filteredData.find(item => {
        const itemDate = new Date(item.d);
        return itemDate.getTime() === targetday.getTime();
    });
    res.send(result)
}

export function specWeekday(req, res) {
    const day = req.params.day;
    const validDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (!validDays.includes(day)) {
        res.status(400).send("Invalid ID, Try:").json();
        return;
    }

    const index = validDays.findIndex(kek => kek === day);
    const idDay = req.filteredData.filter(element => {
        const date = new Date(element.d);
        return date.getDay() === index;
    })
    res.send(idDay);
}

