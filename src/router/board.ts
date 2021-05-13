import {Router} from "express";
import {BoardController} from "../controller/BoardController";

const routes = Router();
routes.post('', BoardController.addBoard);
routes.get('/list',  BoardController.findAllBoard);
routes.get('/count', BoardController.countBoard);
// routes.get(/^\/(\d+)$/, BoardController.findOneBoard);
routes.get('/:id', BoardController.findOneBoard);
routes.put('', BoardController.modifyBoard);
routes.delete('', BoardController.removeBoard);

export default routes;