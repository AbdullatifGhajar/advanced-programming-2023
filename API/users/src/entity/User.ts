import bcrypt from 'bcrypt';
import {
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Entity,
  TableInheritance,
} from 'typeorm';
import Document from '../../../documents/src/entity/Document';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
abstract class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  passwordHash!: string;

  @Column()
  name!: string;

  constructor(email: string, password: string, name: string) {
    this.email = email;
    this.passwordHash = this.hashPassword(password);
    this.name = name;
  }

  private hashPassword(password: string): string {
    if (!password) return ''; // needed for migration
    return bcrypt.hashSync(password, 10);
  }

  abstract get role(): string;
}

export default User;
