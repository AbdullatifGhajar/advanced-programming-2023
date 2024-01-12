const FilesService = require('../services/FilesService');

class FilesController {
    uploadFile(req, res) {
        let filesService = new FilesService();
        filesService.extractFileFromRequest(req, res)
            .then((fileId) => {
                res.json({fileId: fileId});
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }

    downloadFile(req, res) {
        const filesService = new FilesService();
        res.sendFile(filesService.resolveFile(req.params.fileId));
    }
}

module.exports = FilesController;
