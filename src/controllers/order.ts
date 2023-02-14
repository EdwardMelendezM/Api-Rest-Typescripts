import { Request, Response } from "express";
import { RequestExt } from "../interface/req.ext";

import { handleHttp } from "../utils/erros.handle";
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
