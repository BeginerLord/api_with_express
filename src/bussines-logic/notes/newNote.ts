import { createNoteDto } from "@/entities/models/notes";
import { saveNote, validateNoteData } from "@/services";

export const CreateNote = async (data: createNoteDto) => {
  try {
    const isValid = validateNoteData(data);
    if (!isValid) {
      throw new Error("INVALID NOTE DATA");
    }

    const saveNoteToDb = await saveNote(data);
    return saveNoteToDb;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};
