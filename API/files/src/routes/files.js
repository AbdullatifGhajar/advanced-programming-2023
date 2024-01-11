const express = require('express');
const router = express.Router();
const FilesController = require('../controller/FilesController');


router.get('/:fileId', FilesController.downloadFile);

module.exports = router;