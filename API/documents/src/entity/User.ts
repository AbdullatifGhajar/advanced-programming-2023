import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Document from './Document';

@Entity()
class User {    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    name!: string;

    @OneToMany(() => Document, document => document.user)
    documents!: Document[];
}

export default User;
