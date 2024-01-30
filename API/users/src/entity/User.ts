import bcrypt from 'bcrypt';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  TableInheritance,
  BeforeInsert,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
abstract class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  name!: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toJSON() {
    return {
      ...this,
      role: this.role,
    };
  }

  abstract get role(): string;
}

export default User;
