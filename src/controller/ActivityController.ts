import { Request, Response } from "express";
import { createActivityService } from "../services/createActivityService";

export class ActivityController{
    async index(request: Request, response: Response){
        try{
            const {nome, materia} = request.body;

            if (nome && materia){
                const service = new createActivityService();
                const result = (service instanceof Error) ? response.json({error: true}) : await service.execute({nome, materia});
                response.json(result);
            }
        }catch(err){
            console.log(err);
        }
    }
}