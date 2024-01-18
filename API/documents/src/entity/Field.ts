import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
class Field {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'text', nullable: true })
  value: string | undefined;
}

export default Field;
