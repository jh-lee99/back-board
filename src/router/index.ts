import {Router} from "express";
import image from "./image";
import auth from "./auth";
import admin from "./admin";
import {AuthMiddleware} from "../middleware/AuthMiddleware";
import board from "./board";
import comment from "./comment";

const routes = Router();

routes.use('/board', AuthMiddleware.verifyToken, board);

routes.use('/image', image);

routes.use('/comment', AuthMiddleware.verifyToken, comment);

routes.use('/auth', auth);

routes.use('/admin',  AuthMiddleware.verifyToken, AuthMiddleware.hasRole, admin);

export default routes;