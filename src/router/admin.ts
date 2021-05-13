import routes from "./image";
import {AdminController} from "../controller/AdminController";

routes.get('/user', AdminController.getUser);

export default routes;