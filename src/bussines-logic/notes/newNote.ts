import { createNoteDto } from "@/entities/models/notes";
import { saveNote, validateNoteData } from "@/services";

export const CreateNote = async (data: createNoteDto,userId: string) => {
  try {
    const isValid = validateNoteData(data);
    if (!isValid) {
      throw new Error("INVALID NOTE DATA");
    }
    const noteData = { ...data, userId };
    const saveNoteToDb = await saveNote(noteData);
    return saveNoteToDb;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};
