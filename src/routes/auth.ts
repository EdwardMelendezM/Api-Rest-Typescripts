import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
import { checkJwt } from "../middleware/sesion";
/*
 * https://127.0.0.1/3002/auth/login
 * https://127.0.0.1/3002/auth/register
 */
const router = Router();
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);
export { router };
