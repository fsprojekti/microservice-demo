import { Router } from 'express';
import { uploadSchedule } from '/home/cena/microservice-demo/ex-app/controllers/krmilnikController.js'


const router = Router();

router.post("/", uploadSchedule)

export default function (app) {
    app.use('/krmilnik', router);
}
