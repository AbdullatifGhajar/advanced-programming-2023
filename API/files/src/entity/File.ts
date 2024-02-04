import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class File {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  get path(): string {
    return `${this.id}-${this.name}`;
  }
}

export default File;
