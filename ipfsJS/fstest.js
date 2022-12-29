import * as fs from "node:fs";
import csv from 'csv-parser';

fs.createReadStream("porazdelitevTest.csv")
		.pipe(csv({ separator: ";", headers: ['t', 'T'] }))
		.on("data", (data) => console.log(data))
		.on("end", () => {
    });

