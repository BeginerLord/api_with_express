import { getModel } from "@/config/database";
import { Collection } from "@/constants";
import {
  createNoteDto,
  createNoteSchema,
  NoteSchemaMongo,
} from "@/entities/models/notes";

export const validateNoteData = (data: createNoteDto): boolean => {
  try {
    createNoteSchema.parse(data);
    return true;
  } catch (error) {
    console.error("Validation error:", error);
    return false;
  }
};

export const saveNote = async (data: createNoteDto) => {
  const model = await getModel(Collection.NOTES, NoteSchemaMongo);

  const newNote = new model({
    ...data,
  });

  await newNote.save();

  return newNote;
};
