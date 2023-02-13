import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interface/user.interface";
const UserSchema = new Schema<User>(
  {
    name: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      uniqued: true,
    },
    description: {
      type: "string",
      default: "soy la descripcion",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;
