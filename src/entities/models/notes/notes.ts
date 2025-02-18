import { Base } from "@/entities/common";

export interface Note extends Base {
  title: string;
  content: string;
  userId: string; // Relación con el usuario
}
