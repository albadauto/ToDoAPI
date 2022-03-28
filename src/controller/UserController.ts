import { Request, Response } from "express";
import { createUserService } from "../services/createUserService";
import { findUserService } from "../services/findUserService";

export class UserController{
    async handle(request: Request, response: Response){
        try{
            const {email, cpf, senha} = request.body;
            const service = new createUserService();
            const result = await service.execute({email, senha, cpf});
            response.json(result);
        }catch(err){
            console.log(err)
        }
    }

    async isValidLogin(request: Request, response: Response): Promise<void>{
        try{
            const {email, senha} = request.body;
            const findService = new findUserService();
            const result = await findService.execute({email, senha});
            if (result){
                response.json(result);
            }else{
                response.json({auth: null});
            }
            
        }catch(err){
            console.log(err);
        }
    }


}