import Shelter from '../models/Shelter';
import { deliveryValidate } from '../models/package';
import express from 'express';

const router = new express.Router();

router.post('/', (req, res) => {
  deliveryValidate(req.body).then(x => res.json(x));
})

router.get('/', () => {
  getScheduledPackages();
})

export default router;