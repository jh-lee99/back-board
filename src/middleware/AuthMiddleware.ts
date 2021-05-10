import {verify} from 'jsonwebtoken';

export class AuthMiddleware {
  static verifyToken = async (req, res, next) => {

    if (!req.headers["Authorization"] || !req.headers["Authorization"].startsWith("Bearer ")) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }

    const token = req.headers["Authorization"].substring(7);

    verify(token, process.env.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }
      console.log(decoded);
      req.userId = decoded.id;
      next();
    });
  }
}