import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Document from '../../../documents/src/entity/Document';
import Tutor from '../../../users/src/entity/Tutor';

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
