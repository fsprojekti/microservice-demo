import express from 'express';
import bodyParser from 'body-parser';
import meritveRouter from './routes/meritve.js';
import krmilnikRouter from './routes/krmilnik.js';

const app = express();

app.use(bodyParser.json());

meritveRouter(app)
krmilnikRouter(app)

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

