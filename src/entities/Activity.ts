import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity("activity")

export class Activity{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    nome:string;


    @Column()
    materia:string;

    @Column({nullable: true})
    user_id: string;

    @OneToOne(() => User)
    @JoinColumn({name: "user_id"})
    User: User

}