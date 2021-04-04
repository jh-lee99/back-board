import {Router} from "express";
import {BoardController} from "../controller/BoardController";

const routes = Router();

routes.post('/board', BoardController.addBoard);
routes.get('/boards', BoardController.findAllBoard);
routes.get('/board/:id', BoardController.findOneBoard);

export default routes;