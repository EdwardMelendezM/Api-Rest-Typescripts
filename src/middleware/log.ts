import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = req.headers["user-agent"];
  console.log(user);
  console.log("hola soy el log");
  next();
};
export { logMiddleware };
