import { Request, Response } from "express";
import {
  getCars,
  insertCard,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item";
import { handleHttp } from "../utils/erros.handle";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCard(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM");
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const response = await updateCar(req.params.id, req.body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_IEM");
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const response = await deleteCar(req.params.id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};
export { getItem, getItems, updateItem, postItem, deleteItem };
