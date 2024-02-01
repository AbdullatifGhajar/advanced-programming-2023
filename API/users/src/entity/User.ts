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

  @Column({ select: false }) // don't show password in queries
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
