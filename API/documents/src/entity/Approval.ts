import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import User from '../../../users/src/entity/User';
import Document from '../../../documents/src/entity/Document';


@Entity()
export class Approval {
    @PrimaryGeneratedColumn()
    id!: number;

  @OneToOne(() => User, (user) => user.approvals)
  user!: User;

  @Column({ default: false })
  given!: boolean;

  @ManyToOne(() => Document, (document) => document.approvals)
  document: Document = new Document();
}

export default Approval;
