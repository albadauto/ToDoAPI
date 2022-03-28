import { Router } from 'express';
import { UserController } from '../controller/UserController';
const routerUser = Router();

const userController = new UserController();


routerUser.post("/createNewUser", userController.handle);

routerUser.post("/isValidLogin", userController.isValidLogin);


export default routerUser;
