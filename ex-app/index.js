import express from 'express';
import bodyParser from 'body-parser';
import meritveRouter from '/home/cena/microservice-demo/ex-app/routes/meritve.js';
import krmilnikRouter from '/home/cena/microservice-demo/ex-app/routes/krmilnik.js';
import setRouter from '/home/cena/microservice-demo/ex-app/routes/setT.js';

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

