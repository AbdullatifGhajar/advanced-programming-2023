import bcrypt from 'bcrypt';
import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
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
    const { password, ...rest } = this; // remove password from the returned object
    return {
      ...rest,
      role: this.role, // add role to the returned object
    };
  }

  abstract get role(): string;
}

export default User;
