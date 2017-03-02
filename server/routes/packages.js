import express from 'express';
import Packages from '../models/package';

let router = express.Router();

router.get('/', (req, res) => {
  console.log("in routes/packages.js\n")
  Packages.fetchAll().then(packages => {
    res.json({ packages });
  });
});

export default router;