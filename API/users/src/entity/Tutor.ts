import { ChildEntity, OneToMany } from 'typeorm';
import User from './User';
import Approval from '../../../approvals/src/entity/Approval';

@ChildEntity()
class Tutor extends User {
  @OneToMany(() => Approval, (approval) => approval.tutor)
  approvals!: Approval[];

  get role(): string {
    return 'tutor';
  }
}

export default Tutor;
