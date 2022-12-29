const fs = require('fs');
const csv = require("csv-parser");
const express = require("express");
const router = express.Router();



router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /meritve"
    })
});

router.get("/:quantity/:site/:day", (req, res, next) => {
    const filePath = "C:/Users/AMD/magistrska-prog/api/meritve"+req.params.quantity+"/"+req.params.site+"/"+req.params.day
    
    res.send(filePath)
    // const results = [];
    
    // fs.createReadStream("kek.csv")
    //     .pipe(csv({ separator: ";", headers: ['t', 'T'] }))
    //     .on("data", (data) => res.send(data))
    //     .on("end", () => {
    //     });

});

module.exports = router;

