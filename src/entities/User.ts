import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
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