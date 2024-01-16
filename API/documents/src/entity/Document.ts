import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Field from './Field';

@Entity()
class Document {    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToMany(() => Field)
    @JoinTable()
    fields!: Field[];
}

export default Document;
