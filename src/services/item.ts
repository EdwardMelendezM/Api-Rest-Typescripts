import { Car } from "../interface/car.interface";
import ItemModel from "../models/item";

const insertItem = async (item: Car) => {
  const responInsert = await ItemModel.create(item);
  return responInsert;
};

export { insertItem };
