import {Router} from "express";
import {BoardController} from "../controller/BoardController";
import image from "./image";
import {CommentController} from "../controller/CommentController";
import auth from "./auth";

const routes = Router();

routes.post('/board', BoardController.addBoard);
routes.get('/boards', BoardController.findAllBoard);
routes.get('/board/count', BoardController.countBoard);
routes.get('/board/:id', BoardController.findOneBoard);
routes.put('/board', BoardController.modifyBoard);
routes.delete('/board', BoardController.removeBoard);

routes.use('/image', image);

routes.post('/comment', CommentController.addComment);
routes.get('/comments', CommentController.findAllComment);
routes.get('/comment', CommentController.findOneComment);
routes.put('/comment', CommentController.modifyComment);
routes.delete('/comment', CommentController.removeComment);

routes.use('/auth', auth);

export default routes;