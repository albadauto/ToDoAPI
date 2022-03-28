import { getRepository } from "typeorm";
import { Activity } from "../entities/Activity";

interface ActivityInterface {
    nome:string,
    materia: string
}
export class createActivityService{
    async execute({nome, materia}: ActivityInterface): Promise<ActivityInterface>{
        try{
            const repo = getRepository(Activity);
            const result = repo.create({nome, materia});
            await repo.save(result);
            return result;
        }catch(err){
            console.log(err);
        }
    }
}