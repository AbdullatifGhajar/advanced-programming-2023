const express = require('express');
const router = express.Router();
const FilesController = require('../controller/FilesController');

const filesController = new FilesController();

router.post('/upload', filesController.uploadFile);
router.get('/:fileId', filesController.downloadFile);

module.exports = router;