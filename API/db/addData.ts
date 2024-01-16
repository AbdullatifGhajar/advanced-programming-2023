import DB from './DB';

import Document from '../documents/src/entity/Document';
import Field from '../documents/src/entity/Field';


async function addData() {
    const db = await DB.getInstance();

    // add fields
    const fieldRepository = db.getRepository(Field);
    await fieldRepository.save([
        { id: 1, name: 'name' },
        { id: 2, name: 'major', value: 'Software Engineering' },
        { id: 3, name: 'age', value: '42' },
    ]);
    console.log('Fields added successfully');

    // add documents
    const documentRepository = db.getRepository(Document);
    await documentRepository.save([
        { id: 1, name: 'Document 1', fields: [{ id: 1 }, { id: 2 }, { id: 3 }] },
        { id: 2, name: 'Document 2', fields: [{ id: 1 }, { id: 2 }] },
    ]);
    console.log('Documents added successfully');

    await db.destroy();
}

addData();

