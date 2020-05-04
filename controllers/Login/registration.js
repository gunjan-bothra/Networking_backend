const Registration = require('../../models/login/registration');
const bcrypt = require('bcryptjs');

exports.registration = (req, res, next) => {
  console.log('Normal login' + req.session.isLoggedIn);
  if (req.body.googleId) {
    const googleId = req.body.googleId;
    const email = req.body.email;
    const name = req.body.name;
    console.log('LoggedIn user:' + req.session.isLoggedIn);

    Registration.findOne({googleId: googleId})
      .then((user) => {
        if (user) {
          res.send({
            status: 409,
            message: 'User Already Exist',
          });
        } else {
          const registration = new Registration({
            googleId: googleId,
            email: email,
            name: name,
          });
          console.log('reached here');
          registration.save().then((result) => {
            console.log(result);
            if (result) {
              req.session.isLoggedIn = true;
              req.session.user = user;
              req.session.save((err) => {});
              res.send({
                status: 201,
                message: 'User Signed up successfully',
              });
            } else {
              res.send({
                status: 400,
                message:
                  'There is some problem with network it seems or with db',
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
  } else {
    console.log('LoggedIn user:' + req.session.isLoggedIn);
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const name = req.body.name;
    const userName = req.body.userName;
    const password = req.body.password;
    Registration.findOne({email: email})
      .then((user) => {
        if (user) {
          res.send({
            status: 409,
            message: 'User Already Exist',
          });
        } else {
          // Bcryptjs lib is used for password encryption, hash will do the password encoding and
          // '12' will tell the level of encryption. 12 is the highest level of encryption
          return bcrypt.hash(password, 12).then((hashedPassword) => {
            const registration = new Registration({
              phoneNumber: phoneNumber,
              email: email,
              name: name,
              userName: userName,
              password: hashedPassword,
            });
            registration.save().then((result) => {
              console.log(result);
              if (result) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                res.send({
                  status: 201,
                  message: 'User has Signed up successfully',
                });
              } else {
                res.send({
                  status: 400,
                  message:
                    'There is some problem with network it seems or with db',
                });
              }
            });
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.getSignup = (req, res, next) => {
  console.log('User is already exist');
};
