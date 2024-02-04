import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
abstract class Field {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  toJSON() {
    return {
      ...this,
      type: this.type,
    };
  }

  abstract get type(): string;
}

export default Field;
