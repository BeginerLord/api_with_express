import { z } from "zod";
import { Note } from "./notes";

// Define el esquema de validación con Zod
export const createNoteSchema = z.object({
    title: z.string().nonempty("Title is required"),
    content: z.string().nonempty("Content is required"),
    userId: z.string().optional(),
});

// Define los tipos utilizando TypeScript
export type createNoteDto = z.infer<typeof createNoteSchema>;
export type partialNoteDto = Partial<Omit<Note, '_id' | 'createdAt' | 'updatedAt' | 'uuid'>>;