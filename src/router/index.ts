import {Router} from "express";
import {BoardController} from "../controller/BoardController";

const routes = Router();

routes.post('/board', BoardController.addBoard);

export default routes;