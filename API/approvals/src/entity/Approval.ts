import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import Tutor from '../../../users/src/entity/Tutor';
import Document from '../../../documents/src/entity/Document';

@Entity()
export class Approval {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Tutor, (tutor) => tutor.approvals)
  tutor!: Tutor;

  @Column({ default: false })
  isGiven!: boolean;

  @ManyToOne(() => Document, (document) => document.approvals)
  document!: Document;
}

export default Approval;
