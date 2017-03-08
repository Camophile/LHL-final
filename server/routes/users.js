import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';

import User from '../models/user';

let router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return User.query({
    where: { email: data.email },
  }).fetch().then(user => {
    if (user) {
      if (user.get('email') === data.email) {
        errors.email = 'This email already exists';
      }
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  })

}

router.get('/:identifier', (req, res) => {
  User.query({
    select: [ 'email' ],
    where: { email: req.params.identifier }
  }).fetch().then(user => {
    res.json({ user });
  });
});


router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { first_name, last_name, password, email } = req.body;

      const password_digest = bcrypt.hashSync(password, 10);

      User.forge({
        first_name, last_name, email, password_digest
      }, { hasTimestamps: false }).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }));

    } else {
      res.status(400).json(errors);
    }
  });

});

export default router;
