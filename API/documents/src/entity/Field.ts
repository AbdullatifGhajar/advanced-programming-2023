import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
abstract class Field {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}

export default Field;
