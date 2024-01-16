import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Field {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ type: 'text', nullable: true })
    value: string | null = null;
}