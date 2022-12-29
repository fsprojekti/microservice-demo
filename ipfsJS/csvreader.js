import * as fs from "node:fs";
import moment from 'moment';
import csv from 'csv-parser';
import schedule from "node-schedule";
moment().format();
let testDate = new Date("2022-11-29T10:29:00");


function jobsFromCvs(cas) {
	let jobList = []
	const results = [];
	fs.createReadStream("porazdelitevTest.csv")
		.pipe(csv({ separator: ";", headers: ['t', 'T'] }))
		.on("data", (data) => results.push(data))
		.on("end", () => {
			results.forEach((item, index, arr) => {
				if (index > 0) {
					if (arr[index].T != arr[index - 1].T) {
						jobList.push(item)

					}
				}

			});
			for (let i = 0; i < jobList.length; i++) {
				let fulltime = cas.toLocaleDateString() + ", " + jobList[i].t
				console.log(fulltime)
				schedule.scheduleJob(fulltime, function () {
					console.log("T=", jobList[i].T)
				})
			}
		});

}

let cas = new Date();
jobsFromCvs(cas);