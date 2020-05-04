// const User = require('../../models/login/registration');
// const bcrypt = require('bcryptjs');

exports.postLogout = (req, res, next) => {
    req.session.destroy(() => {
        res.status(200).send({message:"User is logged out sucessfully"});
    })
}