import { ChildEntity, OneToMany } from 'typeorm';
import Approval from '../../../approvals/src/entity/Approval';
import User from './User';

@ChildEntity()
class Tutor extends User {
  @OneToMany(() => Approval, (approval) => approval.tutor)
  approvals!: Approval[];

  get role(): string {
    return 'tutor';
  }
}

export default Tutor;
