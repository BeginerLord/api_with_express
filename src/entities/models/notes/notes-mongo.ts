import { Schema, SchemaType } from "mongoose";
import { Note } from "./notes";
import { StatusType } from "@/entities/common";

export const NoteSchemaMongo = new Schema<Note>(
  {
    uuid: { type: String, unique: true, default: () => crypto.randomUUID() },
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: [{ type: Schema.Types.ObjectId, ref: "User" }], // Relación con el usuario
    status: { type: String, default: StatusType.ACTIVE },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

NoteSchemaMongo.methods.toJSON = function () {
  const { _id, ...note } = this.toObject();
  note.uuid = _id;
  return note;
};
