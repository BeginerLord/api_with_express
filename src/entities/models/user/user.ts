import { Base } from "@/entities/common";

export interface User extends Base {
    name: string;
    phone: number;
    password: string;
    rol: string;
    photo: string;
    university: string;
    code_university: string;
    city: string;
    address?: string;
    email: string;
  }