import schedule from 'node-schedule'
import * as i2cFun from './export.js'
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'


// baza podatkov meritev
const meritvePath = "test.json";
const db = new LowSync(new JSONFileSync(meritvePath));

// reset ce je treba
// db.data ||= []
// db.write()

schedule.scheduleJob('00,30 * * * * *', merjenje)

function merjenje() {
	const date = new Date();
	const [t1, t2, t3] = i2cFun.getTemp();
	const [f11, f12] = i2cFun.getFlow_1();
	const [f21, f22] = i2cFun.getFlow_2();
	db.read()
	db.data.push({
	    "d": date,
	    "T": t1,
	    "f1": f11,
	    "f2": f12
	})
	db.write()
}

