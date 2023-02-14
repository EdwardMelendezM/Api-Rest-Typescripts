import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interface/storage.interface";
const storageSchema = new Schema<Storage>(
  {
    fileName: {
      type: "string",
    },
    idUser: {
      type: "string",
    },
    path: {
      type: "string",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StorageModel = model("storage", storageSchema);
export default StorageModel;
