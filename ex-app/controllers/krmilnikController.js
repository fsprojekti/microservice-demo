import { krmilnikdb as db } from '../database/ldb.js';

export function uploadSchedule(req, res) {
    const data = req.body;
    console.log(data);
    db.data = data;
    db.write();
}

