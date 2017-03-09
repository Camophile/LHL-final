import express from 'express';
import User from '../models/user';

let router = express.Router();



router.put('/', (req, res) => {

  const { user, value, requestType } = req.body;

  if (requestType === "add") {
    User.query({
      where: { id: user }
      }).save(
      { reward_points: value},
      { method: 'update' }
    ).then(user => {
      const response = {
        reward_points: user.get('reward_points')
      }
      res.json({response});
    });
  }
});

export default router;
