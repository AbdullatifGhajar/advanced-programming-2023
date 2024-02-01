import { ChildEntity, OneToMany } from 'typeorm';
import Document from '../../../documents/src/entity/Document';
import User from './User';

@ChildEntity()
class Student extends User {
  @OneToMany(() => Document, (document) => document.student)
  documents!: Document[];

  get role(): string {
    return 'student';
  }
}

export default Student;
