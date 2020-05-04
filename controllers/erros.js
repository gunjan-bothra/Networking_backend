exports.getError = (req,res, next) => {
    console.log("Page not found");
    res.status(404).send('<h1>Page not found</h1>');
};