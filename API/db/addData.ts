import DB from './DB';

import Document from '../documents/src/entity/Document';

import TextField from '../documents/src/entity/TextField';
import CheckboxField from '../documents/src/entity/CheckboxField';
import FileField from '../documents/src/entity/FileField';

import Student from '../users/src/entity/Student';
import Admin from '../users/src/entity/Admin';
import Tutor from '../users/src/entity/Tutor';

import File from '../files/src/entity/File';

async function addData() {
  const db = await DB.getInstance();

  // add text and checkbox fields
  const textFields = await db.manager.save(TextField, [
    { id: 1, name: 'name' },
    { id: 2, name: 'major', value: 'Software Engineering' },
    { id: 3, name: 'age', value: '42' },
  ]);
  const checkboxFields = await db.manager.save(CheckboxField, [
    { id: 4, name: 'happy?', value: true },
    { id: 5, name: 'ready?', value: false },
  ]);

  // add file fields
  const file = await db.manager.save(File, {
    id: 1,
    name: 'resume.txt',
  });
  console.log('File added successfully', file);

  const fileFields = await db.manager.save(FileField, [
    { id: 6, name: 'resume', file: { id: 1 } },
  ]);

  console.log(
    'Fields added successfully',
    textFields,
    checkboxFields,
    fileFields,
  );

  // add a student, admin, and tutor
  const student = await db.manager.save(
    Student,
    new Student('student@example.com', 'password', 'John Student'),
  );
  const admin = await db.manager.save(
    Admin,
    new Admin('admin@example.com', 'password', 'John Admin'),
  );
  const tutor = await db.manager.save(
    Tutor,
    new Tutor('tutor@example.com', 'password', 'John Tutor'),
  );
  console.log('Student added successfully', student);
  console.log('Admin added successfully', admin);
  console.log('Tutor added successfully', tutor);

  // add documents
  const documents = await db.manager.save(Document, [
    {
      id: 1,
      name: 'Document 1',
      fields: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ],
      user: student,
    },
    {
      id: 2,
      name: 'Document 2',
      fields: [{ id: 1 }, { id: 2 }],
      user: student,
    },
  ]);
  console.log('Documents added successfully', documents);

  await db.destroy();
  console.log('Test data added successfully');
}

addData();
