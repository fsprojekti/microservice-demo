import { Router } from 'express';

const router = Router();

router.post("/", (req, res) => {
    const data = req.body;
    // tu je treba zamenjat z i2c 
    const now = new Date();
    console.log(`Scheduled time: ${data.d}, Current time: ${now.toLocaleString()}, Temperature: ${data.T}`);
    res.sendStatus(200);
})

export default function(app) {
    app.use('/setT', router);
  }