const fs = require('fs');
const csv = require("csv-parser");

const filePath = "../meritve/"+req.params.quantity+"/"+req.params.site+"/"+req.params.day
    fs.createReadStream(filePath)
		.pipe(csv({ separator: ";", headers: ['t', 'T'] }))
		.on("data", (data) => console.log(data))
		.on("end", () => {
    });