import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserInterface = {
    email:string,
    senha:string,
    cpf:string
}

export class createUserService{
    async execute({email, senha, cpf}: UserInterface): Promise<UserInterface> {
        try{
            const repo = getRepository(User);
            const result = repo.create({email, senha, cpf});
            await repo.save(result);
            return result;

        }catch(err){
            console.log(err);
        }
    }
}