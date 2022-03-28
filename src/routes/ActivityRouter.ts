import { Router } from 'express';
import { ActivityController } from '../controller/ActivityController';

const activityRouter = Router();

activityRouter.post("/createActivity", new ActivityController().index);


export default activityRouter;