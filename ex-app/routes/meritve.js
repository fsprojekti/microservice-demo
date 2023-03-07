import { Router } from 'express';
import * as meritveController from '/home/cena/microservice-demo/ex-app/controllers/meritveController.js'
import { filterByTime } from '/home/cena/microservice-demo/ex-app/middleware/meritveMiddlew.js'

const router = Router();

router.get("/", meritveController.vseMeritve);
router.get("/:date", filterByTime, meritveController.specDate)
router.get("/day/:day", filterByTime, meritveController.specWeekday)

export default function(app) {
  app.use('/meritve', router);
}
