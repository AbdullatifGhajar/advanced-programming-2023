// Document.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Field from './Field';
import User from '../../../users/src/entity/User';
import Approval from './Approval';

@Entity()
class Document {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP + INTERVAL 7 DAY',
  })
  deadline!: Date;

  @ManyToMany(() => Field)
  @JoinTable()
  fields!: Field[];

  @ManyToOne(() => User, (user) => user.documents)
  user!: User;

  @OneToMany(() => Approval, (approval) => approval.document) 
  approvals!: Approval[];
}

export default Document;
