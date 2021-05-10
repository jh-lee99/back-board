import {Board} from "../entity/Board";
import {getConnection} from "typeorm";
import {User} from "../entity/User";
import {hashSync} from 'bcryptjs';
import {Role} from "../entity/Role";

export class AuthController {
  static signIn = async (req, res) => {
    const {title, content} = req.body;

    const board = new Board();
    board.title = title;
    board.content = content;
    const result = await getConnection().getRepository(Board).save(board);

    res.send(result);
  }

  static signUp = async (req, res) => {
    const {email, password, username, roles} = req.body;

    const user = new User();
    user.email = email;
    user.password = hashSync(password, 8);
    user.username = username;

    user.roles = [];

    if (roles && roles.length > 0) {
      // where a 혹은 b or 조건 [{ name: 'a'}, {name: 'b'}]
      const res = await getConnection().getRepository(Role).find({
        where: roles.map(name => ({name}))
      })
      user.roles = res;
    } else {
      // 기본 role은 USER
      const res = await getConnection().getRepository(Role).find({
        where: {name: 'ROLE_USER'}
      })
      user.roles = res;
    }

    const result = await getConnection().getRepository(User).save(user);

    res.send(result);
  }
}