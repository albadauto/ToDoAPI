import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface UserInterface{
    email:string,
    senha: string
}
export class findUserService{
    async execute({email, senha}: UserInterface): Promise<UserInterface>{
        try{
            const repo = getRepository(User);
            const result = repo.findOne({where:{email, senha}});

            if(result){
                return result;
            }else{
                return null;
            }
        }catch(err){
            console.log(err);
        }
    }
}