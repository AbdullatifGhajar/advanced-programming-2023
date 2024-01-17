import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import Field from './Field';
import User from '../../../users/src/entity/User';

@Entity()
class Document {    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToMany(() => Field)
    @JoinTable()
    fields!: Field[];

    @ManyToOne(() => User, user => user.documents)
    user!: User;
}

export default Document;
