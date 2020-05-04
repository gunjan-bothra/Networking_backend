const User = require('../../models/login/registration');
const bcrypt = require('bcryptjs');

exports.postSignin = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({email: email})
    .then((user) => {
      if (!user) {
        res.send({
          status: 409,
          message: 'Entered Email and password is invalid',
        });
      } else {
        return bcrypt.compare(password, user.password).then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.save((err) => {
              console.log(err);
            });
            res.send({
              status: 200,
              message: 'User Logged in sucessfully',
            });
          } else {
            res.send({
              status: 409,
              message: 'Entered password is incorrect',
            });
          }
        });
      }
    })
    .catch((err) => {
      res.send({
        status: 400,
        message: err,
      });
    });
};
