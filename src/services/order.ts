import { Car } from "../interface/car.interface";
import ItemModel from "../models/item";

const getOrders = async () => {
  const responsItems = await ItemModel.find({});
  return responsItems;
};

export { getOrders };
