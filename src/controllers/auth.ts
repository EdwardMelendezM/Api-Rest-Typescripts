import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async (req: Request, res: Response) => {
  const responsiveUser = await registerNewUser(req.body);
  if (responsiveUser === "ALREDY_USER") {
    res.status(402);
    res.send(responsiveUser);
  } else {
    res.send(responsiveUser);
  }
};
const loginCtrl = async (req: Request, res: Response) => {
  const responsiveUser = await loginUser(req.body);
  if (
    responsiveUser === "NOT_FOUND_USER" ||
    responsiveUser === "PASSWORD_INCORRECT"
  ) {
    res.status(403);
    res.send(responsiveUser);
  } else {
    res.send(responsiveUser);
  }
};

export { registerCtrl, loginCtrl };
