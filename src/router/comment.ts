import {Router} from "express";
import {CommentController} from "../controller/CommentController";

const routes = Router();
routes.post('', CommentController.addComment);
routes.get('/list', CommentController.findAllComment);
routes.get('', CommentController.findOneComment);
routes.put('', CommentController.modifyComment);
routes.delete('', CommentController.removeComment);

export default routes;