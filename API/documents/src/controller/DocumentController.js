const DocumentService = require('../services/DocumentService');
class DocumentController {
	async documentList(req, res) {
        const documentService = new DocumentService();
        const list = await documentService.list()
        console.log(list)
        return res.json(list)
    }

    async document(req, res) {
        const documentService = new DocumentService();
        const document = await documentService.document(req.params.id);
        console.log(document)
        return res.json(document)
    }
}

module.exports = DocumentController;
