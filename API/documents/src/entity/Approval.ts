import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import Tutor from '../../../users/src/entity/Tutor';
import Document from './Document';

@Entity()
export class Approval {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Tutor, (tutor) => tutor.approvals)
  tutor!: Tutor;

  @Column({ default: false })
  given!: boolean;

  @ManyToOne(() => Document, (document) => document.approvals)
  document!: Document;
}

export default Approval;
