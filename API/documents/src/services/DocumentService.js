const knex = require('../../../db/connection');

class DocumentService {
    async list() {
        let documents = await knex('documents').select('id', 'name')
        return documents
    }

    async document(id) {
        let documents_with_id = await knex('documents').where({id: id})
        let document_fields_for_document = await knex('document_fields').where({document_id: id})
        
        let document = documents_with_id[0]
        document.fields = []
        for(let document_field of document_fields_for_document) {
            let field = await knex('fields').where({id: document_field.field_id})
            document.fields.push(field[0])
        }
        return document
    }
}

module.exports = DocumentService;