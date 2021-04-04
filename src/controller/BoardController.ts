import {Board} from "../entity/Board";
import {getConnection} from "typeorm";

export class BoardController {
  static addBoard = async (req, res) => {
    const {title, content} = req.body;

    const board = new Board();
    board.title = title;
    board.content = content;
    const result = await getConnection().getRepository(Board).save(board);

    res.send(result);
  }
}