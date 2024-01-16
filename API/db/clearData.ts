const db = require('../db/connection');

async function clearData() {
    await db('document_fields').del();
    await db('documents').del();
    await db('fields').del();

    console.log('Data cleared successfully');
}

clearData();