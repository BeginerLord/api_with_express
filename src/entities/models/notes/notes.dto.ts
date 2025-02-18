import { Note } from "./notes";

export type createNoteDto = Omit<Note, '_id' | 'createdAt' | 'updatedAt' | 'uuid'>;
export type partialNoteDto = Partial<Note>;