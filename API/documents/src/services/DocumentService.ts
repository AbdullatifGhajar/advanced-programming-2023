import knex from '../../../db/connection';

interface Document {
    id: string;
    name: string;
    fields: Field[];
}

interface Field {
    id: string;
    // Add other field properties here
}

class DocumentService {
    async list(): Promise<Document[]> {
        let documents: Document[] = await knex('documents').select('id', 'name');
        return documents;
    }

    async document(id: string): Promise<Document | undefined> {
        let documents_with_id: Document[] = await knex('documents').where({ id: id });
        let document_fields_for_document = await knex('document_fields').where({ document_id: id });

        let document: Document | undefined = documents_with_id[0];
        if (document) {
            document.fields = [];
            for (let document_field of document_fields_for_document) {
                let field: Field[] = await knex('fields').where({ id: document_field.field_id });
                document.fields.push(field[0]);
            }
        }
        return document;
    }
}

export default DocumentService;