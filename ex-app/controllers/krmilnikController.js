import { krmilnikdb as db } from '/home/cena/microservice-demo/ex-app/database/ldb.js';

export function uploadSchedule(req, res) {
    const data = req.body;
    console.log(data);
    db.data = data
    db.write();
    res.sendStatus(200); // send a 200 OK response to the client
}

