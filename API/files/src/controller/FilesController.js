const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.downloadFile = (req, res) => {
    const file = `./uploads/${req.params.fileId}`;
    res.sendFile(path.resolve(file));
};