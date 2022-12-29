import { Low, LowSync } from 'lowdb';
import { JSONFile, JSONFileSync } from 'lowdb/node';
import * as _ from 'lodash';
import fs from "fs";


// db object
const path = "./db/meritve.json"
const db = new LowSync(new JSONFileSync(path))


// start writing
// try {
//     if (fs.existsSync(path)) {
//         // simulacija zapisa meritev v intervalih
//         setInterval(intervalFun, 5000);
//     }
//     else {
//         // naredi prazno dat. z dano strukturo
//         db.data ||= {
//             T: [],
//             d: []
//         };
//         db.write();
//         setInterval(intervalFun, 5000);
//     }
// } catch (err) {
//     console.error(err)
// }

// prebere
db.read()
console.log(db)
// const testd = Date()   // db.data.d[db.data.d.length-1]
// console.log(testd)



function intervalFun() {
    const date = new Date()
    db.read()
    db.data.d.push(date.toLocaleString().toJSON())
    db.data.T.push(Math.floor(Math.random() * 11) + 50)
    db.write()
}

