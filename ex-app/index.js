import express from 'express';
import bodyParser from 'body-parser';
import meritveRouter from './routes/meritve.js';
import krmilnikRouter from './routes/krmilnik.js';
import setRouter from './routes/setT.js';

const app = express();

app.use(bodyParser.json());

meritveRouter(app)
krmilnikRouter(app)
setRouter(app)


// static
app.use('/static', express.static('database'))

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

