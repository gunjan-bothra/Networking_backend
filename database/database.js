// This is to connect to the mongodb atlas. Once mongodb is connect then we are providing client 
// to the callback. callback function is defined in app.js
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const MongoConnect = (callback) => {
MongoClient.connect('mongodb+srv://bothrag:gPzqyWuHOZyXQbjA@mycluster-coo01.mongodb.net/Networking?retryWrites=true&w=majority')
    .then(client => {
        console.log("Connected with MongoDB");
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

const getdb = () => {
    if(_db) {
        return _db;
    } 
    throw "No Database found";
}
// module.exports = MongoConnect;
exports.MongoConnect = MongoConnect;
exports.getdb = getdb;