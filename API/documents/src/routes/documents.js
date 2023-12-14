const express = require('express');
const documentController = require('../controller/DocumentController');

const router = express.Router();

const Document = new documentController();

router.get("/", Document.documentList)

router.get("/:id", Document.document)

module.exports = router;