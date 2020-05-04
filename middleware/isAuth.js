// This is to authenticate user before accessing the api
module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        res.status(404).send("User is not authenticated");
    }
    next();
}