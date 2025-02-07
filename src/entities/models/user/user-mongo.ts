import { Schema } from "mongoose";
import { User } from "./user";
import { StatusType } from "@/entities/common";

export const UserSchemaMongo = new Schema<User>(
    {
      uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
      name: { type: String, required: true },
      code_university: { type: String /*required: true, unique: true*/ },
      email: { type: String, required: true, unique: true },
      phone: { type: Number /*required: true, unique: true*/ },
      status: { type: String, default: StatusType.ACTIVE },
      rol: { type: String },
      password: { type: String, required: true },
      photo: { type: String },
      city: { type: String },
      address: { type: String },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  UserSchemaMongo.methods.toJSON = function () {
    const { _id, ...user } = this.toObject();
    user.uuid = _id;
    return user;
  };