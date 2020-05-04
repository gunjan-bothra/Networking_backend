const UserImage = require('../../models/User/UserImage');

exports.postUserImage = (req, res, next) => {
    console.log(req.file);
    const image = req.file;
    // const caption = req.caption;
    // const location = req.location;
    const userImage = new UserImage({
        imageUrl: image.path
      });
    //   console.log('reached here');
    userImage.save().then((result) => {
        console.log("Image saved:" + result);
    });
}

exports.getUserImage = (req, res, next) => {
    UserImage.find().then((response) => {
        console.log(response);
        res.send(response);
    })
}

