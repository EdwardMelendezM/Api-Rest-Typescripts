import { Car } from "../interface/car.interface";
import ItemModel from "../models/item";

const insertCard = async (item: Car) => {
  const responInsert = await ItemModel.create(item);
  return responInsert;
};
const getCars = async () => {
  const responsItems = await ItemModel.find({});
  return responsItems;
};
const getCar = async (id: String) => {
  const responsItem = await ItemModel.findOne({ _id: id });
  return responsItem;
};
const updateCar = async (id: String, data: Car) => {
  const responsItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responsItem;
};
const deleteCar = async (id: String) => {
  const responsItem = await ItemModel.deleteOne({ _id: id });
  return responsItem;
};
export { insertCard, getCars, getCar, updateCar, deleteCar };
