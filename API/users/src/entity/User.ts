import bcrypt from "bcrypt";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Document from '../../../documents/src/entity/Document';

@Entity()
class User {    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    passwordHash!: string;

    @Column()
    name!: string;

    @OneToMany(() => Document, document => document.user)
    documents!: Document[];

    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.passwordHash = this.hashPassword(password);
        this.name = name;
    }

    private hashPassword(password: string): string {
        if (!password)
            return ''; // needed for migration
        return bcrypt.hashSync(password, 10);
    }
}

export default User;
