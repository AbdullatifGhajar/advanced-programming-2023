import DB from './DB';

import Document from '../documents/src/entity/Document';
import Field from '../documents/src/entity/Field';
import User from '../users/src/entity/User';


async function addData() {
    const db = await DB.getInstance();

    // add fields
    const fields = await db.manager.save(Field, [
        { id: 1, name: 'name' },
        { id: 2, name: 'major', value: 'Software Engineering' },
        { id: 3, name: 'age', value: '42' },
    ]);
    console.log('Fields added successfully', fields);

    // add users
    const user = await db.manager.save(User, new User("john@example.com", "password", "John Doe"));
    console.log('User added successfully', user);

    // add documents
    const documents = await db.manager.save(Document, [
        { id: 1, name: 'Document 1', fields: [{ id: 1 }, { id: 2 }, { id: 3 }], user: { id: 1 } },
        { id: 2, name: 'Document 2', fields: [{ id: 1 }, { id: 2 }], user: { id: 1 } },
    ]);
    console.log('Documents added successfully', documents);

    await db.destroy();
}

addData();

