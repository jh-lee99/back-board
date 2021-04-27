import {Comment} from "../entity/Comment";
import {getConnection} from "typeorm";
import {Board} from "../entity/Board";

export class CommentController {
  static addComment = async (req, res) => {
    const {board_id, content} = req.body;

    const board = await getConnection().getRepository(Board).findOne({id: board_id});

    const comment = new Comment();
    comment.content = content;
    comment.board = board;
    await getConnection().getRepository(Comment).save(comment);

    res.send(comment);
  }

  static findAllComment = async (req, res) => {
    const {board_id} = req.query;

    // const boards = await getConnection().getRepository(Comment).find({ where: { board_id: board_id } });
    const board = await getConnection().getRepository(Board)
      .findOne({relations: ["comments"], where: {id: board_id}});

    res.send(board.comments);
  }

  static findOneComment = async (req, res) => {
    const {id} = req.query;

    const comment = await getConnection().getRepository(Comment).findOne({id});
    console.log(comment);
    res.send(comment);
  }
}