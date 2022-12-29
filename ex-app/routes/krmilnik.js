import { Router } from 'express';
import { uploadSchedule } from '../controllers/krmilnikController.js'


const router = Router();

router.post("/", uploadSchedule)

export default function (app) {
    app.use('/krmilnik', router);
}