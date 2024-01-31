import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import Field from './Field';
import User from '../../../users/src/entity/User';
import Approval from '../../../approvals/src/entity/Approval';

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

  @ManyToOne(() => User)
  user!: User;

  @OneToMany(() => Approval, (approval) => approval.document)
  approvals!: Approval[];
}

export default Document;
