import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Approval from '../../../approvals/src/entity/Approval';
import Student from '../../../users/src/entity/Student';
import Field from './Field';

@Entity()
class Document {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @CreateDateColumn()
  deadline!: Date;

  @ManyToMany(() => Field)
  @JoinTable()
  fields!: Field[];

  @ManyToOne(() => Student, (student) => student.documents)
  student!: Student;

  @OneToMany(() => Approval, (approval) => approval.document)
  approvals!: Approval[];
}

export default Document;
