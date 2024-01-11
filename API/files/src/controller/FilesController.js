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

const upload = multer({ storage: storage });

exports.uploadFile = (req, res) => {
    upload.single('file')(req, res, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        console.log(req);
        
        res.json({ fileId: req.file.filename });
    });
};

exports.downloadFile = (req, res) => {
    const file = `./uploads/${req.params.fileId}`;
    res.sendFile(path.resolve(file));
};