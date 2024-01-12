const multer = require('multer');
const path = require('path');


class FilesService {
    constructor() {
        // Set up multer
        this.storage = multer.diskStorage({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        });

        this.upload = multer({ storage: this.storage });
    }

    extractFileFromRequest(req, res) {
        return new Promise((resolve, reject) => {
            this.upload.single('file')(req, res, function (err) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(req.file.filename);
                }
            });
        });
    }

    resolveFile(fileId) {
        const file = `./uploads/${fileId}`;
        return path.resolve(file);
    }
}

module.exports = FilesService;