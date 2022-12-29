import { meritvedb as db } from '../database/ldb.js';

export function filterByTime(req, res, next) {
  const startTime = req.query.startTime || "00:00:00";
  const endTime = req.query.endTime || "23:59:59";
  db.read();
  const filteredArray = db.data.filter(element => {
    const date = new Date(element.d);
    const time = date.toLocaleTimeString();
    return time >= startTime && time <= endTime;
  });

  req.filteredData = filteredArray;
  next();
}

