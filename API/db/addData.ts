const db = require('./connection');

async function addData() {
    await db('documents').insert([
        { id: 1, name: 'Document 1' },
        { id: 2, name: 'Document 2' },
    ]);

    await db('fields').insert([
        { id: 1, name: 'Name', value: '' },
        { id: 2, name: 'Major', value: 'Software Engineering' },
        { id: 3, name: 'Age', value: '22' },
    ]);

    await db('document_fields').insert([
        { document_id: 1, field_id: 1 },
        { document_id: 1, field_id: 2 },
        { document_id: 2, field_id: 1 },
        { document_id: 2, field_id: 2 },
        { document_id: 2, field_id: 3 },
    ]);

    console.log('Test data added successfully');
}

addData().catch(console.error);