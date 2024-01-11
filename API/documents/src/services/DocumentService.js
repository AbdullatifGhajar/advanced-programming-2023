const knex = require('../../../db/connection');

class DocumentService {
    async list() {
        let documents = await knex('documents').select('id', 'name')
        return documents
    }

    async document(id) {
        let document = await knex('documents').where({id: id})
        let fields_id = await knex('document_fields').where({document_id: id})
        document.fields = []
        for(let field_id of fields_id) {
            field = await knex('fields').where({id: field_id}).select('name')
            document.fields.push(field)
        }
        return document
    }
}

module.exports = DocumentService;