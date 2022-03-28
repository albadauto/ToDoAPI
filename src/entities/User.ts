import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    email:string;

    @Column()
    senha:string;

    @Column()
    cpf: string
    
}