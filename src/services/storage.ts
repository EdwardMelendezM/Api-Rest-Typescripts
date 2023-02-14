import { Storage } from "../interface/storage.interface";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responsItems = await StorageModel.create({ fileName, idUser, path });
  return responsItems;
};

export { registerUpload };
