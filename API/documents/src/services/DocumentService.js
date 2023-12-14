class DocumentService {
    documents = [
        {
            id: 1,
            name: 'document1',
            fields: ['name', 'surname']
        },
        {
            id: 2,
            name: 'document2',
            fields: ['givenName', 'first name','age']
        },
    ]

    async list() {
        return this.documents.map(({id, name}) => ({id, name}));
    }

    async document(id) {
        return this.documents.filter(doc => doc.id == id);
    }
}

module.exports = DocumentService;