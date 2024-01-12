const db = require('./connection');

async function addData() {
    await db('documents').insert([
        { id: 1, name: 'Test Document 1' },
        { id: 2, name: 'Test Document 2' },
    ]);

    await db('fields').insert([
        { id: 1, name: 'Test Field 1', value: 'Test Value 1' },
        { id: 2, name: 'Test Field 2', value: '' },
        { id: 3, name: 'Test Field 3', value: 'Test Value 3' },
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