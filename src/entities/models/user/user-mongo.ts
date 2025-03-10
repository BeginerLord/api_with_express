import { Schema } from "mongoose";
import { User } from "./user";
import { StatusType } from "@/entities/common";
import crypto from "crypto"; 

export const UserSchemaMongo = new Schema<User>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, default: StatusType.ACTIVE },
    notes: [{ type: Schema.Types.ObjectId, ref: "Note" }], // Referencia a las notas del usuario
    rol: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
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

