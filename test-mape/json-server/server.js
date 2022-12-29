import { Low, LowSync } from 'lowdb';
import { JSONFile, JSONFileSync } from 'lowdb/node';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';


const path = "./db/meritve.json"
const db = new LowSync(new JSONFileSync(path))

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());

app.get("/meritve", (req, res) => {
    db.read()
    return res.json(db.data)
})

app.listen(PORT, () => console.log("API server is running..."));



