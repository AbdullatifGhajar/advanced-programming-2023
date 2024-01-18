import DB from './DB';

import Document from '../documents/src/entity/Document';
import Field from '../documents/src/entity/Field';
import Student from '../users/src/entity/User';


async function addData() {
    const db = await DB.getInstance();

    // add fields
    const fields = await db.manager.save(Field, [
        { id: 1, name: 'name' },
        { id: 2, name: 'major', value: 'Software Engineering' },
        { id: 3, name: 'age', value: '42' },
    ]);
    console.log('Fields added successfully', fields);

    // add a student, admin, and tutor
    const student = await db.manager.save(Student, new Student("student@example.com", "password", "John Student"));
    const admin = await db.manager.save(Student, new Student("admin@example.com", "password", "John Admin"));
    const tutor = await db.manager.save(Student, new Student("tutor@example.com", "password", "John Tutor"));
    console.log('Student added successfully', student);
    console.log('Admin added successfully', admin);
    console.log('Tutor added successfully', tutor);

    // add documents
    const documents = await db.manager.save(Document, [
        { id: 1, name: 'Document 1', fields: [{ id: 1 }, { id: 2 }, { id: 3 }], user: student },
        { id: 2, name: 'Document 2', fields: [{ id: 1 }, { id: 2 }], user: student },
    ]);
    console.log('Documents added successfully', documents);

    await db.destroy();
    console.log('Test data added successfully');
}

addData();

