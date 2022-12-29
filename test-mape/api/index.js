const fs = require("fs");
const _ = require("lodash");
const express = require("express");
const app = express();
const port = 3000;

const meritveRoutes = require("./routes/meritve");

app.use("/meritve", meritveRoutes);
app.use(express.json());

app.listen(port, () => console.log("API server is running..."));