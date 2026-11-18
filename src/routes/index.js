import express from 'express';
import ClassRoute from './class.route.js';
const router = express.Router();

router.use('/class', ClassRoute);

export default router;