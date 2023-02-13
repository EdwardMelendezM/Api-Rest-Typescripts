import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/erros.handle";
interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "Esto solo lo ve las personas con sesion / jwt",
      user: req.user,
    });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export { getItems };
